import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Database, KeyRound, Lock, ShieldCheck } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Separator } from '@/components/ui/separator'
import { repositoryUrl, securityUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Contradiction MCP privacy commitments: local-first execution, zero telemetry on your code, and full user ownership of contradiction data.',
}

export default function PrivacyPage() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main-content" className="py-12 md:py-20">
        <div className="site-container max-w-4xl">
          {/* Breadcrumb / back link */}
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            Back to Overview
          </Link>

          {/* Page Header */}
          <header className="mb-12 flex flex-col gap-4">
            <p className="eyebrow">Legal &amp; Privacy</p>
            <h1 className="section-title">Privacy Policy</h1>
            <p className="text-base text-muted-foreground">
              Last updated: March 2025 · Effective date: March 1, 2025
            </p>
          </header>

          {/* Core Principle Callout */}
          <section className="mb-12 rounded-2xl border bg-muted/40 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background text-foreground shadow-xs">
                <ShieldCheck className="size-5 text-accent-foreground" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-medium tracking-tight">Our Core Commitment: Local-First Privacy</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Contradiction MCP is an open-source, self-hosted Model Context Protocol server.
                  It runs on your local machine or private container infrastructure.
                  We do not operate a centralized cloud database that collects your files, claims, repository contents, or analysis results.
                  Your source code and documentation never leave your custody.
                </p>
              </div>
            </div>
          </section>

          {/* Document Content */}
          <div className="flex flex-col gap-10 text-foreground">
            {/* Section 1 */}
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-medium tracking-tight">1. Scope of This Policy</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This Privacy Policy describes how Contradiction MCP (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our project&rdquo;)
                handles data through the Contradiction MCP server software, documentation, and the project website hosted at this domain.
                As an open-source tool distributed under the MIT license, Contradiction is designed to prioritize data sovereignty and minimal telemetry.
              </p>
            </section>

            <Separator />

            {/* Section 2 */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <Database className="size-5 text-muted-foreground" aria-hidden="true" />
                <h2 className="text-xl font-medium tracking-tight">2. Information Processed by the MCP Server</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                When you run Contradiction MCP on your device or server, the application processes data locally:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Source Code &amp; Documents:</strong> Files parsed via connectors
                    (GitHub repositories, Markdown files, PDFs, CSVs, YAML, JSON) are read directly by your local process.
                    Extracted claims and contradiction graphs are stored in a local SQLite file (defaulting to <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">data/contradiction.db</code>).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Zero Central Transmission:</strong> The MCP server does not send your documents,
                    code snippets, claim comparisons, or audit logs to any remote servers operated by the Contradiction maintainers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Immutable Local Audit Logs:</strong> Audit history, review decisions,
                    and resolution timestamps remain strictly in your local database under your control.
                  </span>
                </li>
              </ul>
            </section>

            <Separator />

            {/* Section 3 */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <KeyRound className="size-5 text-muted-foreground" aria-hidden="true" />
                <h2 className="text-xl font-medium tracking-tight">3. Credentials &amp; API Tokens</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                If you configure connectors that require authentication (such as a GitHub Personal Access Token via <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">GITHUB_TOKEN</code>):
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tokens are loaded exclusively from your local environment or client configuration.</li>
                <li>• Tokens are sent directly from your runtime to the respective API endpoint (e.g., <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">api.github.com</code>) over encrypted TLS.</li>
                <li>• Tokens are never logged, proxied, or transmitted to any third party by Contradiction MCP.</li>
              </ul>
            </section>

            <Separator />

            {/* Section 4 */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <Lock className="size-5 text-muted-foreground" aria-hidden="true" />
                <h2 className="text-xl font-medium tracking-tight">4. AI Client &amp; Model Interactions</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Contradiction implements the standard Model Context Protocol. When an AI client (such as Claude Desktop, Cursor, or Antigravity)
                queries Contradiction tools or resources:
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Communications take place across local standard input/output (stdio) or your configured streamable HTTP endpoint.
                Any prompts or claim summaries forwarded by your AI client to an LLM provider (Anthropic, OpenAI, Google, etc.)
                are subject to your direct agreement and privacy policy with that model provider.
              </p>
            </section>

            <Separator />

            {/* Section 5 */}
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-medium tracking-tight">5. Website Telemetry &amp; Cookies</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our public website is hosted on high-performance static infrastructure (Vercel).
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong className="text-foreground">No Invasive Cookies:</strong> We do not use third-party advertising cookies or cross-site tracking trackers.</li>
                <li>• <strong className="text-foreground">Privacy-Preserving Analytics:</strong> We may use aggregate, privacy-focused analytics (such as Vercel Web Analytics) to monitor page performance, visitor counts, and referring sites without capturing personally identifiable information (PII) or storing persistent device fingerprints.</li>
                <li>• <strong className="text-foreground">Do Not Track:</strong> Our website respects Do Not Track (DNT) and Global Privacy Control (GPC) browser signals.</li>
              </ul>
            </section>

            <Separator />

            {/* Section 6 */}
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-medium tracking-tight">6. Data Retention &amp; Erasure</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Because all server data is stored in your local SQLite file, you have unrestricted control over retention and deletion:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• You can purge individual claims, sources, or contradictions at any time using MCP tools.</li>
                <li>• Deleting the SQLite database file permanently destroys all extracted claims, source references, and audit logs. No remnants exist on any remote server.</li>
              </ul>
            </section>

            <Separator />

            {/* Section 7 */}
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-medium tracking-tight">7. Your Rights (GDPR, CCPA/CPRA, and Global Laws)</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Applicable privacy legislation (including the EU GDPR and California Consumer Privacy Act) grants individuals rights regarding access, portability, and erasure of personal information.
                Because the Contradiction project does not collect or centralize your operational or personal data, you exercise full autonomy directly over your self-hosted instance.
              </p>
            </section>

            <Separator />

            {/* Section 8 */}
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-medium tracking-tight">8. Security Disclosures &amp; Contact</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We take security seriously. If you discover a potential vulnerability or have questions regarding our privacy practices,
                please consult our{' '}
                <a href={securityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-accent-foreground">
                  Security Policy <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>{' '}
                or open a security advisory on{' '}
                <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-accent-foreground">
                  GitHub <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
