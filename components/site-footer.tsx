import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Brand } from '@/components/brand'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  contributingUrl,
  discussionsUrl,
  documentationUrl,
  glamaUrl,
  goodFirstIssuesUrl,
  licenseUrl,
  repositoryUrl,
  securityUrl,
} from '@/lib/site'
import { cn } from '@/lib/utils'

const questions = [
  {
    question: 'Is Contradiction another AI model?',
    answer: 'No. Contradiction is an open-source Model Context Protocol server. Its analysis uses deterministic version algebra, contextual classification, and evidence scoring to help your AI client work with more consistent information. It complements your model rather than replacing it.',
  },
  {
    question: 'Where does my data live?',
    answer: 'In infrastructure you control. The server stores claims, source metadata, and audit histories in a local SQLite database, and can run on your machine or your own private server. GitHub and website connectors make network requests only to the sources you configure.',
  },
  {
    question: 'Will it change my code or documentation?',
    answer: 'Not without your explicit instruction. Resolution recommendations are strictly advisory. You choose whether to review, resolve, dismiss, or reopen a finding, and each transition is recorded in an append-only audit history. The advisor never silently mutates your files.',
  },
  {
    question: 'Which sources and clients can I connect?',
    answer: 'Ingest GitHub repositories, local JSON, YAML, Markdown, CSV, and PDF documents, and public web pages. Connect through stdio with clients such as Claude Desktop, Cursor, or Antigravity, or use authenticated streamable HTTP for a remote deployment.',
  },
  {
    question: 'Can I use it in a commercial project?',
    answer: 'Yes. Contradiction is released under the MIT license, which permits commercial use, modification, and distribution, subject to its copyright and license notice requirements. You host and operate the server yourself.',
  },
]

export function QuestionsAndClosing() {
  return (
    <>
      <section aria-labelledby="questions-heading" className="border-y bg-muted/40 py-16 text-foreground md:py-20">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.3fr] lg:gap-14">
            <div className="flex flex-col items-start gap-5">
              <p className="eyebrow">A little more context</p>
              <h2 id="questions-heading" className="section-title">Good questions.<br />Clear answers.</h2>
              <a href={`${repositoryUrl}/issues`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                Ask us on GitHub<ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <Accordion className="w-full">
              {questions.map((item, index) => (
                <AccordionItem key={item.question} value={`question-${index}`}>
                  <AccordionTrigger className="py-5">{item.question}</AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section aria-labelledby="closing-heading" className="py-20 md:py-24">
        <div className="site-container">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex flex-col gap-4">
              <h2 id="closing-heading" className="section-title">Less contradiction.<br /><span className="text-muted-foreground">More confidence.</span></h2>
              <p className="text-base text-muted-foreground">Give your AI context it can stand behind.</p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <a href="/#developers" className={cn(buttonVariants({ size: 'lg' }), 'h-12 gap-6 px-5')}>
                Start with Contradiction<ArrowRight data-icon="inline-end" />
              </a>
              <span className="text-sm text-muted-foreground">Open source. No account required.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="pb-12">
      <div className="site-container">
        <Separator />

        {/* Wanna contribute section */}
        <div className="border-b py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wide uppercase text-muted-foreground">
                <span className="inline-block size-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                Open Source &amp; Community
              </div>
              <h3 className="text-lg font-medium tracking-tight text-foreground">
                Wanna contribute?
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Contradiction MCP is community-driven. Build new connectors, expand heuristic detection, or solve open issues.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm">
              <a
                href={contributingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
              >
                <span>Contributing Guide</span>
                <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </a>
              <span className="text-muted-foreground/30">•</span>
              <a
                href={goodFirstIssuesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
              >
                <span>Good First Issues</span>
                <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </a>
              <span className="text-muted-foreground/30">•</span>
              <a
                href={discussionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span>Discussions</span>
                <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="py-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <Link href="/" aria-label="Back to Contradiction home">
              <Brand />
            </Link>
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <a href="/#product" className="transition-colors hover:text-foreground">Product</a>
              <a href="/#developers" className="transition-colors hover:text-foreground">Installation</a>
              <a href="/#releases" className="transition-colors hover:text-foreground">Releases</a>
              <a href={documentationUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Documentation</a>
              <a href={contributingUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Contribute</a>
              <a href={glamaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Glama (100/100)
                <ArrowUpRight className="size-3 text-muted-foreground" aria-hidden="true" />
              </a>
              <a href={securityUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Security</a>
              <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
              <Link href="/terms" className="transition-colors hover:text-foreground">Terms & Conditions</Link>
              <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                <Image src="/logos/github.svg" alt="" width={16} height={16} />GitHub<ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Contradiction MCP. Created by Daksh Srivastava &amp; Open Source Contributors.</p>
          <a href={licenseUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            MIT Licensed. Local-First &amp; Free.
          </a>
        </div>
      </div>
    </footer>
  )
}
