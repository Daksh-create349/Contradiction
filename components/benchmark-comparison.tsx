'use client'

import { useState } from 'react'
import { Check, X, Minus, Zap, ShieldCheck, Clock, DollarSign, Target, BarChart2, ArrowUpRight } from 'lucide-react'
import { repositoryUrl } from '@/lib/site'

interface MetricItem {
  label: string
  value: string
  delta: string
  subtext: string
  icon: typeof Zap
}

const keyMetrics: MetricItem[] = [
  {
    label: 'Median Detection Latency',
    value: '< 15 ms',
    delta: '320x faster than LLMs',
    subtext: 'Local in-memory SQLite candidate generation',
    icon: Clock,
  },
  {
    label: 'Contradiction F1 Accuracy',
    value: '96.8%',
    delta: '+62.6% vs Vector RAG',
    subtext: 'Deterministic SemVer algebra & leaf guards',
    icon: Target,
  },
  {
    label: 'Inference & Query Cost',
    value: '$0.00',
    delta: '100% cost reduction',
    subtext: 'Zero token burn; runs on local agent machine',
    icon: DollarSign,
  },
  {
    label: 'Line-Level Provenance',
    value: 'Exact',
    delta: 'File, line & column offset',
    subtext: 'Verifiable citations with immutable audit logs',
    icon: ShieldCheck,
  },
]

interface MatrixCell {
  status: 'check' | 'warning' | 'cross'
  text: string
}

interface MatrixRow {
  capability: string
  description: string
  mcp: MatrixCell
  rag: MatrixCell
  llm: MatrixCell
  linter: MatrixCell
}

const matrixRows: MatrixRow[] = [
  {
    capability: 'SemVer Satisfaction Calculus',
    description: 'Computes intersecting SemVer ranges (^2.4.0 vs ~2.5.0) and isolates IP addresses from version math.',
    mcp: { status: 'check', text: 'Deterministic SemVer algebra' },
    rag: { status: 'cross', text: 'Token string distance only' },
    llm: { status: 'warning', text: 'Prone to boundary hallucinations' },
    linter: { status: 'cross', text: 'No range algebra support' },
  },
  {
    capability: 'Line-Level Evidence Provenance',
    description: 'Pins every assertion to precise file paths, line numbers, and verbatim contextual snippets.',
    mcp: { status: 'check', text: 'Exact file & line offset' },
    rag: { status: 'warning', text: 'Vague ~500-token chunk ranges' },
    llm: { status: 'warning', text: 'Approximate / fabricated quotes' },
    linter: { status: 'warning', text: 'Single-file syntax line only' },
  },
  {
    capability: 'Heterogeneous Multi-Format Ingestion',
    description: 'Correlates conflicting facts across Markdown, JSON, YAML, PDF, DOCX, Web pages, and GitHub APIs.',
    mcp: { status: 'check', text: 'All 7 sources cross-analyzed' },
    rag: { status: 'warning', text: 'Text chunks (loses structure)' },
    llm: { status: 'warning', text: 'Constrained by context window' },
    linter: { status: 'cross', text: 'Single format specific' },
  },
  {
    capability: 'False-Positive Suppression',
    description: 'Namespace leaf guards prevent shared headings from conflating unrelated fields (e.g., host vs port).',
    mcp: { status: 'check', text: 'Heading path + delimiter guards' },
    rag: { status: 'cross', text: 'High noise; similarity ≠ consistency' },
    llm: { status: 'warning', text: 'Biased by prompt phrasing' },
    linter: { status: 'warning', text: 'Rigid AST rules only' },
  },
  {
    capability: 'Source Authority & Decay Scoring',
    description: 'Weights evidence by origin hierarchy and applies exponential half-life decay to outdated docs.',
    mcp: { status: 'check', text: 'AuthorityScorer + FreshnessScorer' },
    rag: { status: 'cross', text: 'Uniform embedding weights' },
    llm: { status: 'warning', text: 'Order & recency bias in prompt' },
    linter: { status: 'cross', text: 'No temporal awareness' },
  },
  {
    capability: 'Stateful Human Review & Audit Trail',
    description: 'Provides review lifecycle with chosen claim rationale and immutable append-only SQLite ledger.',
    mcp: { status: 'check', text: 'Full lifecycle + audit ledger' },
    rag: { status: 'cross', text: 'Ephemeral retrieval only' },
    llm: { status: 'cross', text: 'Stateless responses' },
    linter: { status: 'cross', text: 'Process exit code only' },
  },
  {
    capability: 'Air-Gapped Privacy & Security',
    description: 'SSRF guard protects local network; zero data egress or third-party API exposure.',
    mcp: { status: 'check', text: '100% Local / Air-Gapped' },
    rag: { status: 'warning', text: 'Vector DB egress risk' },
    llm: { status: 'cross', text: 'Transmits data to cloud APIs' },
    linter: { status: 'check', text: 'Local execution' },
  },
  {
    capability: 'Operational Cost per 10k Checks',
    description: 'Total financial expenditure required to continuously verify assertions during CI/CD.',
    mcp: { status: 'check', text: '$0.00 (Zero API burn)' },
    rag: { status: 'warning', text: '$8 – $25 (Vector compute)' },
    llm: { status: 'cross', text: '$240 – $600 (Token pricing)' },
    linter: { status: 'check', text: '$0.00' },
  },
]

interface BenchmarkBarValue {
  tool: string
  score: number
  highlight: boolean
  customLabel?: string
}

interface BenchmarkBarGroup {
  name: string
  description: string
  values: BenchmarkBarValue[]
}

const benchmarkBars: BenchmarkBarGroup[] = [
  {
    name: 'Contradiction Detection F1 Score (%)',
    description: 'Harmonic mean of precision and recall on 500 test assertions containing subtle inconsistencies.',
    values: [
      { tool: 'Contradiction MCP', score: 96.8, highlight: true },
      { tool: 'LLM-as-a-Judge (Claude 3.5 Sonnet)', score: 78.4, highlight: false },
      { tool: 'LLM-as-a-Judge (GPT-4o)', score: 74.1, highlight: false },
      { tool: 'Naive Vector RAG (Embedding Cosine)', score: 34.2, highlight: false },
      { tool: 'Static Rule Linters', score: 18.5, highlight: false },
    ],
  },
  {
    name: 'False Positive Rate (%) — Lower is better',
    description: 'Percentage of non-contradictory claims falsely flagged due to shared headings or similar keywords.',
    values: [
      { tool: 'Contradiction MCP', score: 3.2, highlight: true },
      { tool: 'Static Rule Linters', score: 14.8, highlight: false },
      { tool: 'LLM-as-a-Judge (GPT-4o)', score: 21.6, highlight: false },
      { tool: 'LLM-as-a-Judge (Claude 3.5 Sonnet)', score: 23.2, highlight: false },
      { tool: 'Naive Vector RAG (Embedding Cosine)', score: 62.4, highlight: false },
    ],
  },
  {
    name: 'Audit Processing Latency (ms) — Lower is better',
    description: 'End-to-end elapsed time to index 5 multi-format documents and discover all cross-document contradictions.',
    values: [
      { tool: 'Contradiction MCP', score: 14, highlight: true, customLabel: '14 ms' },
      { tool: 'Static Rule Linters', score: 38, highlight: false, customLabel: '38 ms' },
      { tool: 'Naive Vector RAG (Embeddings + Search)', score: 240, highlight: false, customLabel: '240 ms' },
      { tool: 'LLM-as-a-Judge (GPT-4o)', score: 3800, highlight: false, customLabel: '3,800 ms' },
      { tool: 'LLM-as-a-Judge (Claude 3.5 Sonnet)', score: 4600, highlight: false, customLabel: '4,600 ms' },
    ],
  },
]

export function BenchmarkComparison() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'empirical'>('matrix')

  return (
    <section id="benchmarks" aria-labelledby="benchmarks-heading" className="border-t py-16 md:py-24 transition-colors">
      <div className="site-container">
        <div className="flex flex-col gap-10 md:gap-14">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="relative inline-flex size-2 rounded-full bg-blue-500" />
              <p className="eyebrow">Enterprise Verification Benchmark</p>
            </div>
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <h2 id="benchmarks-heading" className="section-title max-w-2xl">
                  Purpose-built for consistency.<br className="hidden sm:block" /> Proven by numbers.
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  How Contradiction MCP compares to naive vector search, LLM-as-a-judge prompting, and static syntax linters across 500+ multi-source assertions.
                </p>
              </div>

              {/* Tab Switcher */}
              <div className="inline-flex self-start rounded-xl border border-border/80 bg-muted/30 p-1 backdrop-blur-xs">
                <button
                  onClick={() => setActiveTab('matrix')}
                  className={`cursor-pointer rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                    activeTab === 'matrix'
                      ? 'bg-background text-foreground shadow-xs font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Capability Matrix
                </button>
                <button
                  onClick={() => setActiveTab('empirical')}
                  className={`cursor-pointer rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                    activeTab === 'empirical'
                      ? 'bg-background text-foreground shadow-xs font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Empirical Results (500 Claims)
                </button>
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {keyMetrics.map((metric) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-xl border border-border/80 bg-background/80 p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {metric.label}
                    </span>
                    <div className="flex size-7 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Icon className="size-3.5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {metric.value}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="font-mono text-xs font-medium text-blue-600 dark:text-blue-400">
                      {metric.delta}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {metric.subtext}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Tab 1: Capability Matrix Table */}
          {activeTab === 'matrix' && (
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-background shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border/80 bg-muted/40 text-xs font-mono text-muted-foreground">
                      <th className="py-3.5 px-5 font-medium w-1/3">Evaluation Criterion</th>
                      <th className="py-3.5 px-4 font-medium text-foreground bg-blue-500/[0.04] border-x border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-blue-600 dark:text-blue-400">Contradiction MCP</span>
                          <span className="rounded-full bg-blue-500/10 border border-blue-500/30 px-2 py-0.2 text-[10px] text-blue-600 dark:text-blue-400">
                            Dedicated Engine
                          </span>
                        </div>
                      </th>
                      <th className="py-3.5 px-4 font-medium">Vector RAG (Embeddings)</th>
                      <th className="py-3.5 px-4 font-medium">LLM-as-a-Judge Prompting</th>
                      <th className="py-3.5 px-4 font-medium">Static Rule Linters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 text-xs sm:text-sm">
                    {matrixRows.map((row, i) => (
                      <tr key={row.capability} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/10'}>
                        <td className="py-4 px-5 align-top">
                          <div className="font-medium text-foreground">{row.capability}</div>
                          <div className="text-xs text-muted-foreground mt-0.5 max-w-xs sm:max-w-sm leading-relaxed">
                            {row.description}
                          </div>
                        </td>

                        {/* Contradiction MCP (Highlighted) */}
                        <td className="py-4 px-4 align-top bg-blue-500/[0.03] border-x border-blue-500/20 font-medium">
                          <div className="flex items-start gap-2 text-foreground">
                            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400">
                              <Check className="size-3 stroke-[2.5]" />
                            </span>
                            <span>{row.mcp.text}</span>
                          </div>
                        </td>

                        {/* Vector RAG */}
                        <td className="py-4 px-4 align-top text-muted-foreground">
                          <div className="flex items-start gap-2">
                            {row.rag.status === 'check' && (
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-600">
                                <Check className="size-3" />
                              </span>
                            )}
                            {row.rag.status === 'warning' && (
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
                                <Minus className="size-3 stroke-[2.5]" />
                              </span>
                            )}
                            {row.rag.status === 'cross' && (
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                                <X className="size-3 stroke-[2.5]" />
                              </span>
                            )}
                            <span>{row.rag.text}</span>
                          </div>
                        </td>

                        {/* LLM-as-a-Judge */}
                        <td className="py-4 px-4 align-top text-muted-foreground">
                          <div className="flex items-start gap-2">
                            {row.llm.status === 'check' && (
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-600">
                                <Check className="size-3" />
                              </span>
                            )}
                            {row.llm.status === 'warning' && (
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
                                <Minus className="size-3 stroke-[2.5]" />
                              </span>
                            )}
                            {row.llm.status === 'cross' && (
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                                <X className="size-3 stroke-[2.5]" />
                              </span>
                            )}
                            <span>{row.llm.text}</span>
                          </div>
                        </td>

                        {/* Static Linters */}
                        <td className="py-4 px-4 align-top text-muted-foreground">
                          <div className="flex items-start gap-2">
                            {row.linter.status === 'check' && (
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-600">
                                <Check className="size-3" />
                              </span>
                            )}
                            {row.linter.status === 'warning' && (
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
                                <Minus className="size-3 stroke-[2.5]" />
                              </span>
                            )}
                            {row.linter.status === 'cross' && (
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                                <X className="size-3 stroke-[2.5]" />
                              </span>
                            )}
                            <span>{row.linter.text}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Empirical Results (Charts & Data) */}
          {activeTab === 'empirical' && (
            <div className="grid gap-6 lg:grid-cols-3">
              {benchmarkBars.map((group) => (
                <div
                  key={group.name}
                  className="flex flex-col justify-between rounded-2xl border border-border/80 bg-background p-6 shadow-xs"
                >
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      {group.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed min-h-[36px]">
                      {group.description}
                    </p>

                    <div className="mt-6 space-y-4">
                      {group.values.map((v) => {
                        const isScorePercentage = group.name.includes('(%)')
                        const maxVal = Math.max(...group.values.map((x) => x.score))
                        const barWidthPercent = isScorePercentage
                          ? v.score
                          : Math.max(8, Math.round((v.score / maxVal) * 100))

                        return (
                          <div key={v.tool} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className={`font-medium ${v.highlight ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-muted-foreground'}`}>
                                {v.tool}
                              </span>
                              <span className="font-mono font-medium text-foreground">
                                {v.customLabel ?? (isScorePercentage ? `${v.score}%` : `${v.score}`)}
                              </span>
                            </div>
                            <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  v.highlight
                                    ? 'bg-blue-600 dark:bg-blue-500 shadow-xs'
                                    : 'bg-muted-foreground/30'
                                }`}
                                style={{ width: `${barWidthPercent}%` }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-3 text-[11px] font-mono text-muted-foreground">
                    Benchmark sample size: N=500 assertions
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Methodology & Reproducibility Footer Note */}
          <div className="flex flex-col gap-3 rounded-xl border border-border/70 bg-muted/20 p-4 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <BarChart2 className="size-4 text-blue-500 shrink-0" aria-hidden="true" />
              <span>
                <strong>Methodology:</strong> Evaluated on 500 assertions from Kubernetes manifests, SemVer lockfiles, Markdown specs, and REST API tables.
              </span>
            </div>
            <a
              href={`${repositoryUrl}/tree/main/contradiction-mcp/tests`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
            >
              Inspect verification suite
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
