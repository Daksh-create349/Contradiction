import { ArrowRight, Braces, FileCheck2, FileText, GitBranch, Globe2, ScanLine, ShieldCheck } from 'lucide-react'
import { Brand } from '@/components/brand'
import { Separator } from '@/components/ui/separator'

const features = [
  {
    icon: ScanLine,
    title: 'Context before conclusions.',
    description: 'Different environments don’t mean conflicting facts. Compare scope, roles, and version ranges to find real contradictions—not noise.',
    detail: 'Context-aware analysis',
  },
  {
    icon: FileCheck2,
    title: 'Evidence. Not a hunch.',
    description: 'Every finding points back to the exact source, line, or page. See what disagrees, why it matters, and which evidence holds more weight.',
    detail: 'Source-level provenance',
  },
  {
    icon: ShieldCheck,
    title: 'You keep the final say.',
    description: 'Get an actionable recommendation, not an uninvited change. Review, resolve, or dismiss—with an immutable trail of every decision.',
    detail: 'Human-led resolution',
  },
]

export function ProductFeatures() {
  return (
    <section id="product" aria-labelledby="product-heading" className="py-20 md:py-28">
      <div className="site-container">
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-5">
            <p className="eyebrow">A consistency layer for your AI</p>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <h2 id="product-heading" className="section-title max-w-2xl">Good decisions start<br className="hidden sm:block" /> with consistent context.</h2>
              <p className="max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">Your stack has a lot to say. Make sure it&apos;s telling the same story.</p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-9">
            {features.map(({ icon: Icon, title, description, detail }) => (
              <article key={title} className="flex flex-col gap-6">
                <div className="flex size-11 items-center justify-center rounded-xl border bg-background text-foreground shadow-xs"><Icon className="size-5" strokeWidth={1.6} aria-hidden="true" /></div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-medium tracking-[-0.035em]">{title}</h3>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">{description}</p>
                </div>
                <p className="font-mono text-sm text-muted-foreground">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const steps = [
  { number: '01', title: 'Connect your sources.', description: 'Repositories, local documents, and public URLs. Bring in the places your team already works.' },
  { number: '02', title: 'Find what doesn’t agree.', description: 'Extract claims, compare their context, and weigh each source by authority, freshness, and evidence.' },
  { number: '03', title: 'Make the call. Keep the trail.', description: 'Review a recommendation and choose what happens next. Every decision stays in your audit history.' },
]

export function Workflow() {
  return (
    <section id="how-it-works" aria-labelledby="workflow-heading" className="py-20 md:py-28">
      <div className="site-container">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="eyebrow">A little less fragmented</p>
            <h2 id="workflow-heading" className="section-title">Many sources in.<br />A clearer picture out.</h2>
            <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">No new source of truth to maintain. Just a better understanding of the ones you already have.</p>
          </div>
          <div className="rounded-2xl border bg-muted/50 px-5 py-10 text-foreground md:px-12">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
              <div className="flex flex-wrap items-center justify-center gap-3 md:flex-col md:items-stretch">
                {[{ icon: GitBranch, label: 'Repositories' }, { icon: FileText, label: 'Documents' }, { icon: Globe2, label: 'Websites' }].map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-lg border bg-background px-4 py-2.5 text-foreground"><div className="flex items-center gap-3 text-sm"><Icon className="size-4 text-muted-foreground" aria-hidden="true" />{label}</div></div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-muted-foreground/60 md:flex-1" aria-hidden="true"><span className="hidden h-px w-full bg-border md:block" /><ArrowRight className="size-5 rotate-90 shrink-0 md:rotate-0" /></div>
              <div className="rounded-2xl border bg-background px-6 py-7 text-foreground shadow-xs"><div className="flex flex-col items-center gap-3"><Brand /><span className="font-mono text-sm text-muted-foreground">Context-aware by design</span></div></div>
              <div className="flex items-center gap-3 text-muted-foreground/60 md:flex-1" aria-hidden="true"><span className="hidden h-px w-full bg-border md:block" /><ArrowRight className="size-5 rotate-90 shrink-0 md:rotate-0" /></div>
              <div className="rounded-xl border bg-background px-5 py-5 text-foreground"><div className="flex flex-col gap-3"><Braces className="size-5 text-accent-foreground" aria-hidden="true" /><span className="text-sm font-medium">Actionable findings</span><span className="text-sm text-muted-foreground">Cited. Scored. Explained.</span></div></div>
            </div>
          </div>
          <div className="grid gap-9 md:grid-cols-3 md:gap-12">
            {steps.map((step) => (
              <article key={step.number} className="flex flex-col gap-5">
                <span className="font-mono text-sm text-muted-foreground">{step.number} <span className="text-foreground/20">/</span></span>
                <div className="flex flex-col gap-3"><h3 className="text-lg font-medium tracking-tight">{step.title}</h3><p className="text-base leading-relaxed text-muted-foreground">{step.description}</p></div>
              </article>
            ))}
          </div>
          <Separator />
        </div>
      </div>
    </section>
  )
}
