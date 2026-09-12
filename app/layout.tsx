import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Contradiction — Different sources. A clearer truth.',
    template: '%s | Contradiction MCP',
  },
  description:
    'Your sources disagree. Now you know. Contradiction is an open-source MCP server that detects, explains, and helps resolve conflicting claims across code, docs, and deployments.',
  applicationName: 'Contradiction MCP',
  authors: [{ name: 'Daksh Srivastava' }, { name: 'Contradiction MCP Contributors' }],
  keywords: ['Contradiction', 'MCP', 'Model Context Protocol', 'developer tools', 'source consistency', 'context engineering', 'local first', 'sqlite'],
  openGraph: {
    title: 'Contradiction — Different sources. A clearer truth.',
    description: 'A consistency layer for your AI. Find contradictions across your code, docs, and deployments, with evidence you can trust.',
    siteName: 'Contradiction MCP',
    type: 'website',
  },
  icons: { icon: { url: '/icon.svg', type: 'image/svg+xml' } },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  colorScheme: 'light',
  themeColor: '#fcfcfd',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`light bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
