/**
 * tsdown preset for dsh-diff-viewer: an ESM node half with declarations plus
 * a browser half (lib/client.js) wrapped for the harness client-plugin loader.
 * The browser half keeps the loader's platform module table external
 * (react, cordis, ui-slots, primitives, runtime) and inlines everything else
 * (including the `diff` line/word diff engine); CSS Modules compile through
 * lightningcss into a <style data-plugin> tag injected at factory execution
 * (removed on unload), the same mechanism as the official client bundles.
 */
import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { basename, dirname, resolve } from 'node:path'
import { transform } from 'lightningcss'
import type { UserConfig } from 'tsdown'

const require = createRequire(import.meta.url)
const PLUGIN_ID = '@dsh-external/dsh-diff-viewer'

/** Module specifiers the dsh web shell shares into its frozen module table. */
const PLATFORM_MODULES = [
  'react', 'react/jsx-runtime', 'react-dom', 'react-dom/client', 'cordis',
  '@deepseek-ai/dsh-client-ui-slots',
  '@deepseek-ai/dsh-client-web-react',
  '@deepseek-ai/dsh-client-ui-primitives',
  '@deepseek-ai/dsh-client-schema-form',
] as const

/** Externals resolved from the loader module table. */
const CLIENT_EXTERNALS: readonly string[] = [...PLATFORM_MODULES, '@deepseek-ai/dsh-client-runtime/client']

const CSS_VIRTUAL_PREFIX = '\0dsh-css:'
const CSS_VIRTUAL_SUFFIX = '.mjs'

export default [
  {
    entry: { index: 'src/index.ts' },
    outDir: 'lib',
    format: ['esm'],
    platform: 'node',
    target: 'es2024',
    fixedExtension: false,
    dts: true,
    clean: true,
    deps: {
      neverBundle: ['schemastery', 'cordis'],
    },
  },
  {
    // Browser bundle: lib/client.js, served by the harness at /plugins/<id>/client.js.
    entry: { client: 'src/client/index.tsx' },
    outDir: 'lib',
    format: 'cjs',
    platform: 'browser',
    dts: false,
    clean: false,
    deps: {
      neverBundle: [...CLIENT_EXTERNALS],
      alwaysBundle: (id: string) => !CLIENT_EXTERNALS.includes(id),
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'production'),
    },
    plugins: [{
      // Bundle purity gate: platform seed entries stay external, every other
      // @deepseek-ai value import is a build error (cross-plugin value imports
      // would inline a duplicate instance or need an unknown table specifier).
      name: 'dsh-client-bundle-purity',
      resolveId(source: string) {
        if (!source.startsWith('@deepseek-ai/')) return null
        if (CLIENT_EXTERNALS.includes(source)) return null
        // The takeover row reuses the stock row's stylesheet through the
        // package's exported src subpath (inlined CSS Modules; no shared
        // runtime instance — the dsh-css-modules-inline plugin consumes it).
        if (source.startsWith('@deepseek-ai/dsh-client-ui-tool/src/') && source.endsWith('.module.css')) return null
        throw new Error(
          `client bundle purity: "${source}" is not a platform module (CLIENT_EXTERNALS) — `
          + 'cross-plugin value imports are forbidden; collaborate through cordis services',
        )
      },
    }, {
      // CSS Modules → hashed class map + one injected <style data-plugin> tag.
      name: 'dsh-css-modules-inline',
      resolveId(source: string, importer: string | undefined) {
        if (!source.endsWith('.module.css')) return null
        // A package-name source (e.g. the stock ToolRow stylesheet) stays a
        // bare specifier — resolved from node_modules at load time; a relative
        // source resolves against the importer as before.
        const abs = source.startsWith('@')
          ? source
          : importer !== undefined ? resolve(dirname(importer), source) : source
        return CSS_VIRTUAL_PREFIX + abs + CSS_VIRTUAL_SUFFIX
      },
      async load(virtualId: string) {
        if (!virtualId.startsWith(CSS_VIRTUAL_PREFIX)) return null
        const raw = virtualId.slice(CSS_VIRTUAL_PREFIX.length, -CSS_VIRTUAL_SUFFIX.length)
        const fileId = raw.startsWith('@') ? require.resolve(raw) : raw
        this.addWatchFile(fileId)
        const source = await readFile(fileId)
        const { code, exports: cssExports } = transform({
          filename: fileId,
          code: source,
          // `[hash]` derives from the resolved absolute path, so a build on a
          // different machine (CI) mints different class names and the
          // committed-lib gate fails spuriously; the basename is stable.
          cssModules: { pattern: '[name]_[local]' },
          minify: true,
        })
        const classMap: Record<string, string> = {}
        // lightningcss exports its class map in hash-table order, which is not
        // stable across builds — sort so the committed-lib gate can compare.
        for (const local of Object.keys(cssExports ?? {}).sort()) classMap[local] = cssExports![local]!.name
        const tagId = `${PLUGIN_ID}/${basename(fileId)}`
        return [
          `const css = ${JSON.stringify(code.toString())};`,
          `const tagId = ${JSON.stringify(tagId)};`,
          `if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css=' + JSON.stringify(tagId) + ']') === null) {`,
          `  const tag = document.createElement('style');`,
          `  tag.dataset.plugin = ${JSON.stringify(PLUGIN_ID)};`,
          `  tag.dataset.pluginCss = tagId;`,
          `  tag.textContent = css;`,
          `  document.head.appendChild(tag);`,
          `}`,
          `export default ${JSON.stringify(classMap)};`,
        ].join('\n')
      },
    }],
    outputOptions: {
      entryFileNames: 'client.js',
      banner: `window.__ModuleLoader__.load({ id: ${JSON.stringify(PLUGIN_ID)}, factory: (require) => {`,
      footer: `return module.exports; } });`,
      intro: 'var module = { exports: {} }; var exports = module.exports;',
    },
  },
] satisfies UserConfig[]
