import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProductFeatures, Workflow } from '@/components/product-details'
import { SourceDemo } from '@/components/source-demo'
import { Quickstart } from '@/components/quickstart'
import { ReleaseHistory } from '@/components/release-history'
import { QuestionsAndClosing, SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div id="top">
      <a href="#main-content" className="sr-only fixed top-4 left-4 z-50 rounded-lg bg-primary px-5 py-3 text-primary-foreground focus:not-sr-only">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ProductFeatures />
        <SourceDemo />
        <Workflow />
        <Quickstart />
        <ReleaseHistory />
        <QuestionsAndClosing />
      </main>
      <SiteFooter />
    </div>
  )
}
