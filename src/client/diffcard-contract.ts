/** Local toolview contract for the diff-viewer plugin: the owner currency the
 *  stock ui-tool rows supply at `tool.call.toolview` and the pure diff-card
 *  derivation, declared locally so this plugin never imports the stock ui-tool
 *  contract (one-way dependency). The `declare module` merge restores the slot
 *  key this plugin registers into — the stock ui-tool bundle declares the same
 *  row with the same shape, and interface merging accepts the duplicate
 *  identical declaration. */
import type { ToolCallBlock } from '@deepseek-ai/dsh-client-runtime/client'
import type { DiffHunk } from './DiffViewer.tsx'

/** What the stock ui-tool rows pass to the `tool.call.toolview` keyed slots. */
export interface ToolCallOwnerProps {
  /** Tool call identity, stable across running and settled forms. */
  callId: string
  /** Wire Tool name and keyed dispatch value. */
  toolName: string
  /** Frozen running call or settled result node. */
  block: ToolCallBlock
  /** Session workspace root for relative summaries. */
  cwd?: string | undefined
  /** Open a Tool argument path through the Host. */
  openFile: (path: string) => void
  /** Inspect this call in the trajectory view when available. */
  inspect?: (() => void) | undefined
}

/** The derived diff-card material the renderer draws. */
export interface DiffCardModel {
  card: { diffs: DiffHunk[] }
}

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface SlotMap {
    /** Keyed atomic Tool call view (declared by the stock ui-tool chat tree). */
    'tool.call.toolview': { kind: 'keyed'; scope: 'session'; owner: ToolCallOwnerProps }
  }
}

/** Narrow a wire `card:'diff'` view's `diffs` to well-formed hunks (same
 *  validation the stock diff-card model applies). */
function narrowDiffs(diffs: unknown): DiffHunk[] | null {
  if (!Array.isArray(diffs) || diffs.length === 0) return null
  for (const hunk of diffs) {
    if (hunk === null || typeof hunk !== 'object') return null
    const { path, oldText, newText } = hunk as Record<string, unknown>
    if (typeof path !== 'string' || (oldText !== null && typeof oldText !== 'string') || typeof newText !== 'string') {
      return null
    }
  }
  return diffs as DiffHunk[]
}

/** Derive the diff-card props for a tool call, or null when this call is not a
 *  diff card (running calls use the call-time diff; settled calls use the
 *  applied result hunks, which replace the call-time diff). */
export function diffCardModel(block: ToolCallBlock): DiffCardModel | null {
  if (!('kind' in block)) {
    // Running: the call view may carry the intended diff; the result is absent.
    const call = block.callView?.card === 'diff' ? block.callView : null
    const diffs = call === null ? null : narrowDiffs(call.diffs)
    return diffs === null ? null : { card: { diffs } }
  }
  // Settled: the result view's applied hunks replace the call-time diff.
  const result = block.resultView?.card === 'diff' ? block.resultView : null
  const diffs = result === null ? null : narrowDiffs(result.diffs)
  return diffs === null ? null : { card: { diffs } }
}
