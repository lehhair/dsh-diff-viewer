/** The diff-card chain owner currency and slot declarations, declared locally
 *  so this plugin never imports the stock ui-tool contract (one-way
 *  dependency). The `declare module` merge restores the slot keys this plugin
 *  registers into — the stock ui-tool bundle declares the same rows with the
 *  same shapes, and interface merging accepts the duplicate identical
 *  declarations. */
import type { DiffHunk } from './DiffViewer.tsx'

/** What the stock ui-tool rows pass to the `tool.*.diffcard` chain slots. */
export interface DiffCardOwnerProps {
  /** The derived diff-card material (the wire hunks) the renderer draws. */
  card: { card: { diffs: DiffHunk[] } }
  /** Height cap in body rows; absent = uncapped (the details panel). */
  maxLines?: number
  /** Render-site layout class (row indentation, panel padding). */
  className?: string
}

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface SlotMap {
    /** Chat-flow diff card chain (declared by the stock ui-tool chat tree). */
    'tool.call.diffcard': { kind: 'chain'; scope: 'session'; owner: DiffCardOwnerProps }
    /** Details-panel diff card chain (declared by the stock ui-tool details row). */
    'tool.details.diffcard': { kind: 'chain'; scope: 'session'; owner: DiffCardOwnerProps }
  }
}
