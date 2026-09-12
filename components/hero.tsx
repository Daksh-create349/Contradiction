import Image from 'next/image'
import { ArrowDownRight, ArrowRight, ArrowUpRight, EqualNot, FileCode2, FileText, LockKeyhole } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { glamaUrl } from '@/lib/site'
import { cn } from '@/lib/utils'

const clients = [
  { name: 'Claude Desktop', logo: '/logos/claude.svg' },
  { name: 'Cursor', logo: '/logos/cursor.svg' },
  { name: 'Antigravity', logo: '/logos/antigravity.svg' },
  { name: 'Any MCP client', logo: '/logos/mcp.svg' },
]

export function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="site-container">
        <div className="py-12 md:py-14 lg:py-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_1fr] lg:gap-7">
            <div className="hero-reveal flex flex-col items-start gap-7">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-medium text-amber-800 dark:text-amber-300">
                  <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
                  <span>Currently in active development</span>
                </div>
                <a
                  href={glamaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-800 transition-colors hover:bg-emerald-500/20 dark:text-emerald-300"
                  aria-label="Glama 100/100 Score"
                >
                  <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>Glama Score: <strong>100/100</strong></span>
                  <ArrowUpRight className="size-3 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                </a>
              </div>
              <a href="#developers" className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground">
                <span className="size-1.5 rounded-full bg-accent-foreground" aria-hidden="true" />
                <span>Open source. Clear by design.</span>
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
              <h1 id="hero-heading" className="hero-title">
                <span className="block">Your sources</span>
                <span className="block">disagree.</span>
                <span className="block text-muted-foreground">Now you know.</span>
              </h1>
              <p className="max-w-[410px] text-pretty text-base leading-relaxed text-muted-foreground">
                The MCP server that finds contradictions across your code, docs, and deployments. Less guesswork. More ground truth.
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                  <a href="#developers" className={cn(buttonVariants({ size: 'lg' }), 'h-12 gap-4 px-5 sm:gap-5')}>
                    Get started
                    <ArrowRight data-icon="inline-end" />
                  </a>
                  <a href="#in-action" className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium">
                    See it in action
                    <ArrowDownRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <LockKeyhole className="size-3.5" aria-hidden="true" />
                    Local-first. MIT licensed. Yours to control.
                  </p>
                  <span className="hidden text-muted-foreground/40 sm:inline" aria-hidden="true">•</span>
                  <a
                    href={glamaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center transition-opacity hover:opacity-80"
                    aria-label="Glama MCP server score 100/100"
                  >
                    <Image
                      src="/logos/glama-score.svg"
                      alt="Glama MCP score badge"
                      width={110}
                      height={20}
                      className="h-5 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
            <figure className="hero-visual hero-reveal hero-reveal-art" aria-label="An illustrative runtime contradiction between documentation and a Dockerfile">
              <Image src="/images/contradiction-mark.png" alt="A sculptural chrome not-equal sign" width={1024} height={1024} priority sizes="(max-width: 1023px) 540px, 52vw" className="hero-sculpture" />
              <a href="#in-action" className="evidence-note evidence-note-docs p-4" aria-label="Inspect the example documentation claim: Node.js 18">
                <div className="flex flex-col gap-3">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground"><FileText className="size-4" aria-hidden="true" /> README.md <span className="ml-auto font-mono text-muted-foreground">:42</span></span>
                  <span className="font-mono text-base">Node.js <span className="text-accent-foreground">18.x</span></span>
                  <span className="hidden text-sm text-muted-foreground sm:block">The docs say one thing.</span>
                </div>
              </a>
              <a href="#in-action" className="evidence-note evidence-note-code p-4" aria-label="Inspect the example Dockerfile claim: Node.js 22">
                <div className="flex flex-col gap-3">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground"><FileCode2 className="size-4" aria-hidden="true" /> Dockerfile <span className="ml-auto font-mono">:3</span></span>
                  <span className="font-mono text-base">Node.js <span className="text-accent-foreground">22.x</span></span>
                  <span className="hidden text-sm text-muted-foreground sm:block">Your code says another.</span>
                </div>
              </a>
              <figcaption className="hero-signal">
                <Badge variant="accent"><EqualNot data-icon="inline-start" /> Conflict detected</Badge>
              </figcaption>
            </figure>
          </div>
        </div>
        <Separator />
        <div className="hero-reveal hero-reveal-clients py-8 md:py-9">
          <div className="flex flex-col items-center justify-between gap-7 lg:flex-row">
            <p className="text-sm text-muted-foreground">Better context.<br className="hidden lg:block" /> Wherever you build.</p>
            <div className="grid w-full grid-cols-2 items-center gap-x-8 gap-y-6 sm:flex sm:w-auto sm:justify-center sm:gap-10 xl:gap-16">
              {clients.map((client) => (
                <a key={client.name} href="#developers" className="inline-flex items-center justify-center gap-2.5 text-base font-medium tracking-tight text-foreground/75 transition-colors hover:text-foreground">
                  <Image src={client.logo} alt="" width={25} height={25} className="size-6 object-contain" />
                  {client.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Separator />
      </div>
    </section>
  )
}
