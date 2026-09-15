import { EqualNot } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Brand({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 font-sans whitespace-nowrap shrink-0', className)}>
      <EqualNot className="size-7 shrink-0" strokeWidth={2.7} aria-hidden="true" />
      {!compact && <span className="text-xl font-semibold tracking-[-0.055em] shrink-0 whitespace-nowrap">contradiction</span>}
    </span>
  )
}
