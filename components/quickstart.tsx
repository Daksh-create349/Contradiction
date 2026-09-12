'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy, Sparkles, Terminal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { documentationUrl, repositoryUrl } from '@/lib/site'
import { cn } from '@/lib/utils'

const claudeConfig = JSON.stringify({
  mcpServers: {
    contradiction: {
      command: 'node',
      args: ['/absolute/path/to/Contradiction-MCP/contradiction-mcp/dist/index.js'],
    },
  },
}, null, 2)

const antigravityConfig = JSON.stringify({
  mcpServers: {
    contradiction: {
      command: 'node',
      args: ['/absolute/path/to/Contradiction-MCP/contradiction-mcp/dist/index.js'],
      env: {
        NODE_ENV: 'production',
        DATABASE_PATH: '/absolute/path/to/Contradiction-MCP/contradiction-mcp/data/contradiction.db',
        MCP_TRANSPORT: 'stdio',
        LOG_LEVEL: 'error',
      },
    },
  },
}, null, 2)

const cursorConfig = JSON.stringify({
  mcpServers: {
    contradiction: {
      command: 'node',
      args: ['/absolute/path/to/Contradiction-MCP/contradiction-mcp/dist/index.js'],
    },
  },
}, null, 2)

const setups = [
  {
    id: 'one-command',
    label: 'One-Command (CLI)',
    filename: 'terminal',
    language: 'bash',
    code: `# Configure in ALL detected IDEs automatically:\nnpx -y contradiction-mcp install all\n\n# Or configure a specific editor:\nnpx -y contradiction-mcp install antigravity\nnpx -y contradiction-mcp install cursor\nnpx -y contradiction-mcp install claude\nnpx -y contradiction-mcp install claude-code\nnpx -y contradiction-mcp install windsurf`,
    note: 'Auto-detects client configuration paths across macOS, Linux, and Windows. Wires up stdio transport in seconds.',
    tag: 'Recommended',
  },
  {
    id: 'source',
    label: 'From Source',
    filename: 'terminal',
    language: 'bash',
    code: `# 1. Clone the repository\ngit clone ${repositoryUrl}.git\ncd "Contradiction-MCP/contradiction-mcp"\n\n# 2. Install dependencies & build TypeScript\nnpm install\nnpm run build\n\n# 3. Automatically configure all your local IDEs\nnpm run install-mcp\n\n# Or start directly over stdio\nnode dist/index.js`,
    note: 'Requires Node.js 20+ and npm 9+. Builds TypeScript dist files and initializes local SQLite database in data/contradiction.db.',
  },
  {
    id: 'antigravity',
    label: 'Antigravity',
    filename: '~/.gemini/config/mcp_config.json',
    language: 'json',
    code: antigravityConfig,
    note: 'Merge into ~/.gemini/config/mcp_config.json (global) or <workspace>/.agents/mcp_config.json. Restart AGY to load all 21 tools automatically.',
  },
  {
    id: 'cursor',
    label: 'Cursor',
    filename: '.cursor/mcp.json',
    language: 'json',
    code: cursorConfig,
    note: 'Add to .cursor/mcp.json in your workspace root. Replace the absolute path to your built dist/index.js file.',
  },
  {
    id: 'claude',
    label: 'Claude Desktop',
    filename: 'claude_desktop_config.json',
    language: 'json',
    code: claudeConfig,
    note: 'Add to ~/Library/Application Support/Claude/claude_desktop_config.json (macOS) or %APPDATA%\\Claude\\claude_desktop_config.json (Windows).',
  },
  {
    id: 'docker',
    label: 'Docker',
    filename: 'terminal',
    language: 'bash',
    code: `git clone ${repositoryUrl}.git\ncd "Contradiction-MCP/contradiction-mcp"\n\n# Build container image and start daemon\ndocker build -t contradiction-mcp:latest .\ndocker compose up -d\n\n# Check health endpoint\ncurl http://localhost:3000/health`,
    note: 'Runs self-contained container with persistent volume for SQLite and streamable HTTP on port 3000.',
  },
  {
    id: 'verify',
    label: 'Verify & Test',
    filename: 'terminal',
    language: 'bash',
    code: `cd "Contradiction-MCP/contradiction-mcp"\n\n# Run all 169 unit & integration tests\nnpm test\n\n# Run live end-to-end smoke test with real SQLite\nnpm run smoke\n\n# Run interactive demo scenario\nnpm run demo`,
    note: 'Verifies zero mocks: tests real SQLite WAL storage, SemVer algebra, and multi-source claim comparisons.',
  },
]

function CopyButton({ text, label }: { text: string; label: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle')

  useEffect(() => {
    if (status === 'idle') return
    const timeout = window.setTimeout(() => setStatus('idle'), 3500)
    return () => window.clearTimeout(timeout)
  }, [status])

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setStatus('copied')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only" role="status">
        {status === 'copied'
          ? 'Code copied to clipboard.'
          : status === 'error'
            ? 'Clipboard is unavailable. Select the code below and copy it manually.'
            : ''}
      </span>
      <Button
        variant="ghost"
        size="lg"
        className="h-9 px-3"
        onClick={copy}
        aria-label={status === 'error' ? 'Copy unavailable; select the code to copy manually' : label}
      >
        {status === 'copied' ? <Check data-icon="inline-start" /> : <Copy data-icon="inline-start" />}
        {status === 'copied' ? 'Copied' : status === 'error' ? 'Select to copy' : 'Copy code'}
      </Button>
    </div>
  )
}

export function Quickstart() {
  return (
    <section id="developers" aria-labelledby="developers-heading" className="pb-20 md:pb-28">
      <div className="site-container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.3fr] lg:gap-14">
          <div className="flex flex-col items-start gap-6">
            <p className="eyebrow">Installation &amp; Setup</p>
            <h2 id="developers-heading" className="section-title">
              Up and running.<br />In seconds.
            </h2>
            <p className="max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">
              Connect Contradiction to your AI tools with a single command, or build from source with full control.
              Runs locally over stdio or deploys remotely with streamable HTTP.
            </p>
            <div className="flex flex-col gap-2.5">
              <div className="rounded-lg border px-4 py-3">
                <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
                  <span>21 tools</span>
                  <span className="text-foreground/20" aria-hidden="true">/</span>
                  <span>4 resources</span>
                  <span className="text-foreground/20" aria-hidden="true">/</span>
                  <span>2 prompts</span>
                </div>
              </div>
              <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Sparkles className="size-3.5 text-accent-foreground" aria-hidden="true" />
                Zero mocks · Real SQLite WAL · Local-first
              </p>
            </div>
            <a
              href={documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium"
            >
              Explore full documentation<ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="min-w-0">
            <Tabs defaultValue="one-command" className="gap-5">
              <div className="overflow-x-auto pb-1">
                <TabsList variant="line" aria-label="Installation method" className="h-10 gap-3">
                  {setups.map((setup) => (
                    <TabsTrigger key={setup.id} value={setup.id} className="gap-2 px-2 whitespace-nowrap">
                      {setup.label}
                      {setup.tag && (
                        <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-medium text-accent-foreground">
                          {setup.tag}
                        </span>
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {setups.map((setup) => (
                <TabsContent key={setup.id} value={setup.id}>
                  <div className="flex flex-col gap-4">
                    <div className="code-surface overflow-hidden rounded-xl border shadow-sm">
                      <div className="px-4 py-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="flex min-w-0 items-center gap-2 font-mono text-sm text-muted-foreground">
                            <Terminal className="size-4 shrink-0" aria-hidden="true" />
                            <span className="hidden truncate sm:inline">{setup.filename}</span>
                            <span className="sm:hidden">{setup.language}</span>
                          </span>
                          <CopyButton text={setup.code} label={`Copy ${setup.label} setup code`} />
                        </div>
                      </div>
                      <Separator />
                      <pre
                        className="min-h-64 overflow-x-auto p-5 font-mono text-sm leading-7 sm:p-6"
                        tabIndex={0}
                        aria-label={`${setup.label} setup code`}
                      >
                        <code>
                          {setup.code.split('\n').map((line, index) => (
                            <span
                              key={index}
                              className={cn('block', line.trim().startsWith('#') && 'text-muted-foreground')}
                            >
                              {line || '\u00a0'}
                            </span>
                          ))}
                        </code>
                      </pre>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{setup.note}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
