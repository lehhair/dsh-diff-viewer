/**
 * shiki-bridge: the per-line syntax-highlighting seam between this plugin and
 * the dsh shell.
 *
 * ui-primitives exported `highlightLines` / `subscribeGrammarLoaded` /
 * `grammarLoadCount` through rc.5 and RETRACTED them in rc.6 — the shiki
 * machinery stays in the shell bundle, and the rc.6 package's `index.d.ts`
 * keeps only `writeClipboard`. Because this plugin is a CJS bundle over the
 * shell's module table, a missing named member is `undefined` at runtime, not
 * a crash — so ONE build serves both worlds: member present → the shell's
 * shiki (zero duplication); absent → callers degrade to plain text.
 *
 * `HighlightSpan` is declared here so this module never depends on a
 * primitives type export that rc.6 dropped.
 */
import * as primitives from '@deepseek-ai/dsh-client-ui-primitives'
import type { CSSProperties } from 'react'

/** One highlighted run of a line (mirrors the rc.5 primitives export). */
export interface HighlightSpan {
  text: string
  style: CSSProperties
}

/** Tokenize one source side into per-line runs; `undefined` = render plain. */
type HighlightLines = (code: string, lang: string | undefined) => HighlightSpan[][] | undefined
/** Subscribe to lazy-grammar load completions (useSyncExternalStore subscribe). */
type SubscribeGrammarLoaded = (listener: () => void) => () => void
/** The lazy-grammar load counter (useSyncExternalStore snapshot). */
type GrammarLoadCount = () => number

/** The shell's rc.5-era per-line shiki path; `undefined` when the shell retracted it (rc.6+). */
const shell = primitives as {
  highlightLines?: HighlightLines
  subscribeGrammarLoaded?: SubscribeGrammarLoaded
  grammarLoadCount?: GrammarLoadCount
}

/** Present on rc.5 shells; `undefined` on rc.6+ (see module doc). */
export const highlightLines = shell.highlightLines
/** Present on rc.5 shells; `undefined` on rc.6+ (see module doc). */
export const subscribeGrammarLoaded = shell.subscribeGrammarLoaded
/** Present on rc.5 shells; `undefined` on rc.6+ (see module doc). */
export const grammarLoadCount = shell.grammarLoadCount

/** No-op subscribe (stable identity) for hosts that retracted the grammar loader. */
export const NOOP_SUBSCRIBE: () => () => void = () => () => {}

/** Constant zero snapshot for hosts that retracted the grammar loader. */
export const ZERO_COUNT: () => number = () => 0
