'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Brand } from '@/components/brand'
import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { navigation, repositoryUrl } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-30 bg-background/95 text-foreground backdrop-blur-xl">
      <div className="border-b border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-center text-xs font-medium text-amber-800 dark:text-amber-300">
        <span className="inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
          Currently in active development
        </span>
      </div>
      <div className="site-container">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Contradiction home" onClick={() => setMenuOpen(false)}>
              <Brand />
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-300">
              <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
              Currently in active development
            </span>
          </div>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 text-sm transition-opacity hover:opacity-60 sm:inline-flex" aria-label="View GitHub repository (opens in a new tab)">
              <Image src="/logos/github.svg" alt="" width={18} height={18} />
              GitHub
              <ArrowUpRight className="size-3.5 text-muted-foreground" aria-hidden="true" />
            </a>
            <a href="/#developers" className={cn(buttonVariants({ size: 'lg' }), 'hidden h-10 px-4 sm:inline-flex')}>
              Get started
              <ArrowUpRight data-icon="inline-end" />
            </a>
            <Button ref={menuButtonRef} variant="ghost" size="icon-lg" className="lg:hidden" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="pb-6 lg:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="rounded-md py-3 text-base text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(false)}>{item.label}</a>
              ))}
              <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="py-3 text-base text-muted-foreground" onClick={() => setMenuOpen(false)}>View on GitHub</a>
              <a href="/#developers" className={cn(buttonVariants({ size: 'lg' }), 'h-11')} onClick={() => setMenuOpen(false)}>Get started <ArrowUpRight data-icon="inline-end" /></a>
            </div>
          </nav>
        )}
      </div>
      <Separator />
    </header>
  )
}
