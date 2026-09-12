import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertCircle, ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Scale, ShieldAlert } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Separator } from '@/components/ui/separator'
import { licenseUrl, repositoryUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions governing the use of the Contradiction MCP open-source software and website.',
}

export default function TermsPage() {
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
            <p className="eyebrow">Legal &amp; Governance</p>
            <h1 className="section-title">Terms &amp; Conditions</h1>
            <p className="text-base text-muted-foreground">
              Last updated: March 2025 · Effective date: March 1, 2025
            </p>
          </header>

          {/* Core Notice Callout */}
          <section className="mb-12 rounded-2xl border bg-muted/40 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background text-foreground shadow-xs">
                <AlertCircle className="size-5 text-accent-foreground" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-medium tracking-tight">Advisory Notice &amp; Human-in-the-Loop</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Contradiction MCP identifies conflicting assertions across software artifacts and provides evidence-scored recommendations.
                  All findings, classifications, and proposed resolutions are strictly advisory.
                  The software does not automatically commit or overwrite your production code, configuration, or documentation without your explicit instruction.
                  You remain entirely responsible for evaluating and testing changes before applying them.
                </p>
              </div>
            </div>
          </section>

          {/* Document Content */}
          <div className="flex flex-col gap-10 text-foreground">
            {/* Section 1 */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <Scale className="size-5 text-muted-foreground" aria-hidden="true" />
                <h2 className="text-xl font-medium tracking-tight">1. Acceptance of Terms</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                By downloading, compiling, deploying, connecting to, or using the Contradiction MCP server software, documentation,
                or website (&ldquo;the Service&rdquo; or &ldquo;Software&rdquo;), you agree to be bound by these Terms and Conditions.
                If you are using the Software on behalf of an organization or company, you represent that you possess the authority to bind that entity to these terms.
              </p>
            </section>

            <Separator />

            {/* Section 2 */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <Code2 className="size-5 text-muted-foreground" aria-hidden="true" />
                <h2 className="text-xl font-medium tracking-tight">2. Open-Source License (MIT)</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The core Contradiction MCP software is distributed under the terms of the{' '}
                <a href={licenseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-accent-foreground">
                  MIT License <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>.
              </p>
              <div className="rounded-xl border bg-muted/20 p-5 font-mono text-xs leading-relaxed text-muted-foreground">
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
                documentation files, to deal in the Software without restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the condition
                that the copyright notice and permission notice shall be included in all copies or substantial portions of the Software.
              </div>
            </section>

            <Separator />

            {/* Section 3 */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="size-5 text-muted-foreground" aria-hidden="true" />
                <h2 className="text-xl font-medium tracking-tight">3. Acceptable Use &amp; Connector Compliance</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                When using Contradiction connectors (including GitHub repository synchronization, website scrapers, and document ingestion):
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Authorized Access Only:</strong> You agree to synchronize only repositories,
                    documents, and websites that you own, maintain, or have explicit permission to access and analyze.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Respect for Third-Party Policies:</strong> You agree not to bypass authentication,
                    violate third-party terms of service (including GitHub API Terms or website robots.txt directives), or conduct unauthorized automated scraping.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Rate Limiting &amp; Responsible Use:</strong> You agree to configure connectors responsibly,
                    respecting API rate limits and avoiding denial-of-service impacts on external services.
                  </span>
                </li>
              </ul>
            </section>

            <Separator />

            {/* Section 4 */}
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-medium tracking-tight">4. Disclaimer of Warranties (&ldquo;AS IS&rdquo;)</h2>
              <p className="text-sm leading-relaxed text-muted-foreground uppercase tracking-wide">
                THE SOFTWARE AND WEBSITE ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;, WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                ACCURACY, RELIABILITY, COMPLETENESS, TITLE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                While Contradiction MCP implements deterministic version algebra and mathematical authority scoring, we do not warrant that
                the detection algorithms will identify all contradictions, that recommendations are error-free, or that the software will operate uninterrupted.
              </p>
            </section>

            <Separator />

            {/* Section 5 */}
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-medium tracking-tight">5. Limitation of Liability</h2>
              <p className="text-sm leading-relaxed text-muted-foreground uppercase tracking-wide">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL DAKSH SRIVASTAVA, PROJECT CONTRIBUTORS,
                OR AFFILIATED MAINTAINERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES
                (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, REPUTATION, OR PROFITS;
                CODE CORRUPTION; SERVICE INTERRUPTIONS; OR DEPLOYMENT OUTAGES) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
                WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
                EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
              </p>
            </section>

            <Separator />

            {/* Section 6 */}
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-medium tracking-tight">6. Third-Party Trademarks &amp; Technologies</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Model Context Protocol (MCP), Claude, Cursor, Antigravity, GitHub, Docker, Node.js, and related logos or marks
                are the registered trademarks or service marks of their respective proprietors.
                Their mention on this website and in the documentation is solely for descriptive compatibility purposes and does not imply endorsement, affiliation, or sponsorship.
              </p>
            </section>

            <Separator />

            {/* Section 7 */}
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-medium tracking-tight">7. Modifications to Terms</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We reserve the right to amend these Terms and Conditions as the project evolves. Any changes will be published
                directly to this page with an updated &ldquo;Last updated&rdquo; timestamp. Continued use of the Software following any changes
                constitutes your acceptance of the revised terms.
              </p>
            </section>

            <Separator />

            {/* Section 8 */}
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-medium tracking-tight">8. Contact &amp; Community Governance</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Questions or issues regarding these Terms and Conditions should be submitted to the project maintainers via{' '}
                <a href={`${repositoryUrl}/issues`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-accent-foreground">
                  GitHub Issues <ArrowUpRight className="size-3.5" aria-hidden="true" />
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
