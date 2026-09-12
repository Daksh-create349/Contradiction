'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronUp, CornerDownRight, EqualNot, FileCode2, FileText, GitBranch, Layers, ScanLine } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Evidence {
  file: string
  kind: 'code' | 'document'
  environment: string
  startLine: number
  lines: string[]
  highlight: number
}

interface Scenario {
  id: string
  label: string
  icon: typeof ScanLine
  sources: [Evidence, Evidence]
  conflict: boolean
  heading: string
  explanation: string
  recommendation: string
  context: string
}

const scenarios: Scenario[] = [
  {
    id: 'runtime',
    label: 'Runtime versions',
    icon: GitBranch,
    sources: [
      { file: 'Dockerfile', kind: 'code', environment: 'production', startLine: 1, lines: ['# Production API service', '# Runtime environment', 'FROM node:22-alpine', 'WORKDIR /app', 'COPY package*.json ./'], highlight: 2 },
      { file: 'README.md', kind: 'document', environment: 'production', startLine: 40, lines: ['## Production requirements', '', 'Node.js 18.x is required.', '', 'Run npm install to get started.'], highlight: 2 },
    ],
    conflict: true,
    heading: 'Same environment. Incompatible versions.',
    explanation: 'Both sources describe the production runtime, but Node.js 18.x and 22.x cannot be satisfied together. This is a real contradiction, not a formatting difference.',
    recommendation: 'Use the production Dockerfile as the stronger execution reference. Verify the deployed runtime, then update README.md:42 if Node.js 22 is the intended production version.',
    context: 'runtime.version · production',
  },
  {
    id: 'ports',
    label: 'Port bindings',
    icon: ScanLine,
    sources: [
      { file: 'config/production.json', kind: 'code', environment: 'production', startLine: 1, lines: ['{', '  "service": "api",', '  "listen_port": 8080,', '  "environment": "production"', '}'], highlight: 2 },
      { file: 'docs/deployment.md', kind: 'document', environment: 'production', startLine: 16, lines: ['## API service', '', 'The API listens on port 3000.', '', 'Environment: production'], highlight: 2 },
    ],
    conflict: true,
    heading: 'One service. Two listening ports.',
    explanation: 'The configuration and deployment guide make incompatible claims about the same service’s internal listening port in production.',
    recommendation: 'Confirm which configuration the production API loads. If config/production.json is active, update the deployment guide to document internal port 8080 and keep any external port mappings separate.',
    context: 'service.listen_port · production',
  },
  {
    id: 'context',
    label: 'Different contexts',
    icon: Layers,
    sources: [
      { file: 'Dockerfile.prod', kind: 'code', environment: 'production', startLine: 1, lines: ['# Production runtime', '', 'FROM node:22-alpine', 'ENV NODE_ENV=production', 'WORKDIR /app'], highlight: 2 },
      { file: 'Dockerfile.dev', kind: 'code', environment: 'development', startLine: 1, lines: ['# Development runtime', '', 'FROM node:20-alpine', 'ENV NODE_ENV=development', 'WORKDIR /app'], highlight: 2 },
    ],
    conflict: false,
    heading: 'Different environments. No contradiction.',
    explanation: 'These claims apply to different environments. The engine keeps production and development in their own context instead of treating every difference as a conflict.',
    recommendation: 'No contradiction needs to be resolved. If your team wants runtime parity between environments, review it as a separate engineering decision—not as an inconsistent claim about the same environment.',
    context: 'runtime.version · separate environments',
  },
]

function EvidenceFile({ evidence }: { evidence: Evidence }) {
  const Icon = evidence.kind === 'code' ? FileCode2 : FileText
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border bg-background text-foreground">
      <div className="px-4 py-3.5 sm:px-5">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <span className="flex min-w-0 items-center gap-2 text-sm"><Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" /><span className="truncate font-mono">{evidence.file}</span></span>
          <span className="hidden text-sm text-muted-foreground sm:inline">{evidence.environment}</span>
        </div>
      </div>
      <Separator />
      <div className="overflow-x-auto py-5" tabIndex={0} role="region" aria-label={`${evidence.file} example source code`}>
        <div className="min-w-max">
          {evidence.lines.map((line, index) => (
            <div key={index} className="demo-code-line px-4 sm:px-5" data-highlight={evidence.highlight === index}>
              <span className="w-5 shrink-0 select-none text-right text-muted-foreground/70" aria-hidden="true">{evidence.startLine + index}</span>
              <code className="whitespace-pre">{line || ' '}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AnalysisResult({ scenario }: { scenario: Scenario }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = scenario.conflict ? EqualNot : Check

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        {scenario.sources.map((source) => <EvidenceFile key={source.file} evidence={source} />)}
      </div>
      <div className="rounded-xl border bg-background p-5 text-foreground sm:p-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5"><Icon className="size-5 text-accent-foreground" aria-hidden="true" /><span className="text-sm font-medium">{scenario.conflict ? 'Contradiction detected' : 'Context respected'}</span><Badge variant={scenario.conflict ? 'destructive' : 'secondary'}>{scenario.conflict ? 'Review needed' : 'No conflict'}</Badge></div>
            <span className="font-mono text-sm text-muted-foreground">{scenario.context}</span>
          </div>
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="flex max-w-2xl flex-col gap-2"><h3 className="text-lg font-medium tracking-tight">{scenario.heading}</h3><p className="text-sm leading-relaxed text-muted-foreground">{scenario.explanation}</p></div>
            <Button variant="outline" size="lg" className="h-10 w-fit shrink-0 px-4" aria-expanded={expanded} aria-controls={`recommendation-${scenario.id}`} onClick={() => setExpanded((value) => !value)}>
              {expanded ? 'Hide recommendation' : 'View recommendation'}
              {expanded ? <ChevronUp data-icon="inline-end" /> : <ArrowRight data-icon="inline-end" />}
            </Button>
          </div>
          {expanded && (
            <div id={`recommendation-${scenario.id}`} className="rounded-lg bg-accent p-4 text-accent-foreground" role="status">
              <div className="flex items-start gap-3"><CornerDownRight className="size-4 shrink-0" aria-hidden="true" /><div className="flex flex-col gap-2"><p className="text-sm font-medium">Suggested next step</p><p className="text-sm leading-relaxed">{scenario.recommendation}</p><p className="text-sm">Advisory only. No source files are changed.</p></div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function SourceDemo() {
  return (
    <section id="in-action" aria-labelledby="demo-heading" className="border-y bg-muted/60 py-20 text-foreground md:py-24">
      <div className="site-container">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="eyebrow">Less noise. More signal.</p>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 id="demo-heading" className="section-title">A difference isn&apos;t always<br className="hidden sm:block" /> a contradiction.</h2><p className="max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">See how context turns a simple comparison into a finding you can actually use.</p></div>
          </div>
          <Tabs defaultValue="runtime" className="gap-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="-mx-1 overflow-x-auto px-1 pb-1">
                <TabsList variant="line" aria-label="Example contradiction scenarios" className="h-11 gap-4">
                  {scenarios.map(({ id, label, icon: Icon }) => <TabsTrigger key={id} value={id} className="px-1.5"><Icon data-icon="inline-start" />{label}</TabsTrigger>)}
                </TabsList>
              </div>
              <span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="size-1.5 rounded-full bg-muted-foreground/50" aria-hidden="true" />Interactive example · not a live scan</span>
            </div>
            {scenarios.map((scenario) => <TabsContent key={scenario.id} value={scenario.id}><AnalysisResult scenario={scenario} /></TabsContent>)}
          </Tabs>
          <p className="text-center text-sm text-muted-foreground">Real findings come with source authority, freshness scoring, and exact citations. No black boxes.</p>
        </div>
      </div>
    </section>
  )
}
