/**
 * Registers the DiffViewer surface into the ui-tool diff-card chain slots:
 * `tool.call.diffcard` (chat flow rows) and `tool.details.diffcard` (details
 * panel). Both are chain slots declared by the stock ui-tool bundle; this
 * plugin's registration runs at priority 0 with a constant selector, so it
 * wins the chain over the stock DiffBlock fallback whenever it is mounted —
 * and the stock surface returns automatically when this plugin unloads.
 */

import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type {} from '@deepseek-ai/dsh-client-ui-slots'
import { DiffViewer } from './DiffViewer.tsx'
import type { DiffCardOwnerProps } from './diffcard-contract.ts'

/** The diff-card chain owner props the stock ui-tool rows supply. */
type Owner = DiffCardOwnerProps

/** Render the visual diff surface for one card chain dispatch. */
function DiffViewerCard({ card, maxLines, className }: Owner) {
  return <DiffViewer diffs={card.card.diffs} maxLines={maxLines} className={className} />
}

/** Required service: the slot registry. */
export const inject = ['slots']

/**
 * Mount the DiffViewer into both diff-card chain slots.
 * @param ctx - client root context.
 */
export function apply(ctx: ClientContext): void {
  for (const slot of ['tool.call.diffcard', 'tool.details.diffcard'] as const) {
    ctx.slots.inject(slot, () => ctx.slots.register({
      name: slot,
      priority: 0,
      select: () => true,
    }, DiffViewerCard))
  }
}
