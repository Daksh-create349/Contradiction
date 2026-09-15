'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, CheckCircle2, Sparkles, Tag, GitCommit, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { repositoryUrl } from '@/lib/site'

interface ReleaseItem {
  version: string
  date: string
  title: string
  tagType: 'major' | 'minor' | 'patch'
  isLatest?: boolean
  badges: string[]
  highlights: string[]
}

const latestRelease: ReleaseItem = {
  version: 'v0.3.2',
  date: 'September 15, 2026',
  title: 'Precision Parser Heuristics & CI Badge Intelligence',
  tagType: 'patch',
  isLatest: true,
  badges: ['Latest', 'False-Positive Fixes', '191 Tests Passing'],
  highlights: [
    'IP Address vs SemVer Isolation: Strict IPv4/IPv6 guards prevent IP addresses (127.0.0.1) from misclassifying as versions or comparing against ports.',
    'Namespace Leaf Guard: Prevents shared Markdown headings (## 2. Configuration) from falsely matching unrelated fields (host vs port).',
    'Multi-Column Table Parsing: Skips delimiter rows and header rows, extracting tabular specs into clean property claims.',
    'Visual CI Badge Detection: Ingests Shields.io and GitHub Action status badges to catch conflicting passing vs failing badges.',
  ],
}

const previousReleases: ReleaseItem[] = [
  {
    version: 'v0.3.1',
    date: 'September 15, 2026',
    title: 'Glama 100/100 Certification & Smithery 1-Click',
    tagType: 'patch',
    badges: ['Glama 100/100', 'Smithery 1-Click', 'SSRF Hardening'],
    highlights: [
      'Glama 100/100 verified server score for JSON-RPC 2.0 protocol adherence and real embedded SQLite persistence.',
      'Smithery 1-click install via smithery.yaml for instant setup across Claude Desktop, Cursor, and Antigravity.',
      'SSRF protection blocking loopback, RFC 1918 CIDRs, and cloud metadata endpoints (169.254.169.254).',
      'In-memory sliding-window rate limiter and append-only audit trail logging for all resolution lifecycle events.',
    ],
  },
  {
    version: 'v0.3.0',
    date: 'September 14, 2026',
    title: '12 Canonical Tools & Word (.docx) Table Parser',
    tagType: 'minor',
    badges: ['12 Canonical Tools', 'DOCX Table Extraction', 'Backwards Compatible'],
    highlights: [
      'Standardized API surface into 12 canonical verb-noun MCP tools with typed Zod schemas.',
      'Transparent backward-compatibility routing shim for zero breaking changes on legacy agent workflows.',
      'OpenXML (.docx) Word table parser extracting key-value matrices and specs with document provenance.',
      'Multi-format E2E test suite running simultaneous cross-referencing of Markdown, JSON, and Word docs.',
    ],
  },
  {
    version: 'v0.2.1',
    date: 'September 14, 2026',
    title: 'Scoped Claim Discovery & Section Namespacing',
    tagType: 'patch',
    badges: ['Scoped Discovery', 'Section Namespacing'],
    highlights: [
      'Markdown section namespacing contextualizing properties with heading paths (e.g. database_port).',
      'Precision ClaimMatcher combining Token Jaccard similarity, edit distance, and canonical synonym groups.',
      'Single-claim scanClaim API for ultra-fast (<10ms) verification of newly introduced assertions.',
    ],
  },
  {
    version: 'v0.2.0',
    date: 'September 13, 2026',
    title: 'SemVer Satisfaction Algebra & Authority Scoring',
    tagType: 'minor',
    badges: ['SemVer Calculus', 'Authority Scoring', 'Decay Model'],
    highlights: [
      'Deterministic SemVer range algebra using semver.satisfies and semver.intersects instead of string matching.',
      'Dual-factor intelligence: AuthorityScorer (source hierarchy) and FreshnessScorer (exponential half-life decay).',
      'Contextual classification: VERSION_MISMATCH, CONFIGURATION_MISMATCH, STATUS_MISMATCH, etc.',
    ],
  },
  {
    version: 'v0.1.1',
    date: 'September 12, 2026',
    title: 'Multi-Source Synchronization & Line Provenance',
    tagType: 'patch',
    badges: ['Multi-Source Sync', 'Line Provenance'],
    highlights: [
      'Unified connector pipeline across GitHub repositories, local documents (Markdown, YAML, JSON, PDF), and URLs.',
      'Exact line numbers, file paths, and verifiable citation snippets for every detected contradiction.',
      'Automatic post-synchronization discovery triggers detecting regressions immediately.',
    ],
  },
  {
    version: 'v0.1.0',
    date: 'September 12, 2026',
    title: 'Initial Production Release',
    tagType: 'major',
    badges: ['Initial Release', 'SQLite WAL', 'Stdio Protocol'],
    highlights: [
      'First production release of Contradiction MCP server built on Model Context Protocol specification.',
      'Local-first embedded SQLite storage with Write-Ahead Logging (WAL) and foreign key integrity.',
      'Stdio server transport for Claude Desktop, Cursor, and Google Antigravity.',
    ],
  },
]

export function ReleaseHistory() {
  const [showPrevious, setShowPrevious] = useState(false)
  const [expandedVersions, setExpandedVersions] = useState<Record<string, boolean>>({})

  const toggleVersion = (ver: string) => {
    setExpandedVersions((prev) => ({ ...prev, [ver]: !prev[ver] }))
  }

  return (
    <section id="releases" aria-labelledby="releases-heading" className="border-t bg-muted/20 py-16 md:py-24 transition-colors">
      <div className="site-container">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              <p className="eyebrow">Changelog &amp; Release History</p>
            </div>
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <h2 id="releases-heading" className="section-title max-w-xl">
                  Release History
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Latest updates, protocol revisions, and performance improvements shipped to Contradiction MCP.
                </p>
              </div>
              <a
                href={`${repositoryUrl}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start rounded-lg border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground shadow-xs transition-all duration-200 hover:bg-muted hover:border-foreground/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Tag className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:rotate-12" aria-hidden="true" />
                View all on GitHub
                <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Featured Latest Release Card with Animated Glow & Micro-interactions */}
          <div className="relative group/latest overflow-hidden rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-background to-blue-500/5 p-6 shadow-sm backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-500/50 sm:p-8">
            {/* Ambient subtle glow background */}
            <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-500 group-hover/latest:opacity-100 opacity-60" />

            <div className="relative flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-2xl font-bold tracking-tight text-foreground transition-colors group-hover/latest:text-emerald-600 dark:group-hover/latest:text-emerald-400">
                    {latestRelease.version}
                  </span>
                  <Badge
                    variant="default"
                    className="relative overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs px-2.5 py-0.5 transition-all duration-200 shadow-xs"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Zap className="size-3 text-emerald-200 animate-pulse" aria-hidden="true" />
                      Latest
                    </span>
                  </Badge>
                  <span className="rounded-md border bg-muted/60 px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors">
                    {latestRelease.tagType}
                  </span>
                </div>
                <time className="font-mono text-xs sm:text-sm text-muted-foreground">
                  {latestRelease.date}
                </time>
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl transition-colors">
                  {latestRelease.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {latestRelease.badges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full border bg-emerald-500/10 border-emerald-500/20 px-3 py-0.5 font-mono text-xs text-foreground/90 transition-all duration-200 hover:scale-105 hover:bg-emerald-500/15"
                  >
                    <Sparkles className="size-3 text-emerald-500" aria-hidden="true" />
                    {b}
                  </span>
                ))}
              </div>

              <div className="border-t border-border/80 pt-4 mt-2">
                <ul className="grid gap-2.5 sm:grid-cols-2 text-sm leading-relaxed text-muted-foreground">
                  {latestRelease.highlights.map((h, i) => (
                    <li key={i} className="group/item flex items-start gap-2.5 transition-colors hover:text-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-emerald-500 mt-1 transition-transform duration-200 group-hover/item:scale-125" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs font-mono text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <GitCommit className="size-3.5" aria-hidden="true" />
                  Tag: {latestRelease.version}
                </span>
                <a
                  href={`${repositoryUrl}/releases/tag/${latestRelease.version}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-foreground/80 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  GitHub Release Notes
                  <ArrowUpRight className="size-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Expand Previous Releases Toggle Button with Bounce & Chevron Flip */}
          <div className="flex flex-col items-center justify-center pt-2">
            <button
              onClick={() => setShowPrevious(!showPrevious)}
              className="group inline-flex items-center gap-2.5 rounded-xl border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-xs transition-all duration-300 hover:bg-muted hover:border-foreground/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>
                {showPrevious
                  ? 'Collapse previous releases'
                  : `Expand previous releases (${previousReleases.length} prior versions from v0.1.0)`}
              </span>
              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-300 ease-out ${
                  showPrevious ? 'rotate-180 text-foreground' : 'group-hover:translate-y-0.5'
                }`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Previous Releases Animated Accordion Timeline */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              showPrevious
                ? 'max-h-[3000px] opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none overflow-hidden'
            }`}
          >
            <div className="relative border-l-2 border-border/80 pl-6 ml-3 sm:pl-10 sm:ml-6 space-y-6 pt-2">
              {previousReleases.map((rel, idx) => {
                const isExpanded = expandedVersions[rel.version] ?? false

                return (
                  <article
                    key={rel.version}
                    className="relative group transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      animationDelay: `${idx * 60}ms`,
                    }}
                  >
                    {/* Pulsing timeline node */}
                    <div
                      className="absolute -left-[32px] sm:-left-[48px] top-4 size-3.5 rounded-full border-2 border-muted-foreground/40 bg-background transition-all duration-300 group-hover:border-emerald-500 group-hover:scale-125 group-hover:ring-4 group-hover:ring-emerald-500/20"
                      aria-hidden="true"
                    />

                    <div className="rounded-xl border border-border/80 bg-background/80 p-5 shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-foreground/30 hover:shadow-md">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-base font-bold text-foreground transition-colors group-hover:text-foreground">
                              {rel.version}
                            </span>
                            <span className="rounded-md border bg-muted/60 px-1.5 py-0.2 font-mono text-[10px] uppercase text-muted-foreground">
                              {rel.tagType}
                            </span>
                          </div>
                          <time className="font-mono text-xs text-muted-foreground">
                            {rel.date}
                          </time>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <h4 className="text-sm font-medium text-foreground sm:text-base">
                            {rel.title}
                          </h4>
                          <button
                            onClick={() => toggleVersion(rel.version)}
                            className="group/btn shrink-0 text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-border/50 bg-muted/30 hover:bg-muted transition-all duration-150 cursor-pointer"
                          >
                            <span>{isExpanded ? 'Hide' : 'Details'}</span>
                            <ChevronDown
                              className={`size-3 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : 'group-hover/btn:translate-y-0.5'
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {rel.badges.map((b) => (
                            <span
                              key={b}
                              className="rounded-full border bg-muted/30 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground transition-transform duration-150 hover:scale-105"
                            >
                              {b}
                            </span>
                          ))}
                        </div>

                        {/* Smooth Expandable Drawer for Details */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isExpanded ? 'max-h-96 opacity-100 pt-3 mt-1' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="border-t border-border/60 pt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
                            {rel.highlights.map((h, i) => (
                              <div key={i} className="flex items-start gap-2 group/bullet">
                                <span className="size-1.5 rounded-full bg-emerald-500/80 mt-1.5 shrink-0 transition-transform duration-150 group-hover/bullet:scale-150" />
                                <span className="transition-colors group-hover/bullet:text-foreground">{h}</span>
                              </div>
                            ))}
                            <div className="pt-2 text-right">
                              <a
                                href={`${repositoryUrl}/releases/tag/${rel.version}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/ext inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors"
                              >
                                View on GitHub
                                <ArrowUpRight className="size-3 transition-transform duration-150 group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
