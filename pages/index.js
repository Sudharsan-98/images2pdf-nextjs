import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../components/Header'
import ToolsSection from '../components/ToolsSection'
import SEOContent from '../components/SEOContent'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      // Dynamic import to prevent SSR issues
      import('feather-icons').then(feather => {
        feather.replace()
        // Re-run after components load
        setTimeout(feather.replace, 500)
      })
    }
  }, [])

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Head>
        <title>All-in-One PDF Tools</title>
        <meta name="description" content="Free online PDF tools" />
      </Head>
      
      <Header />
      <main className="flex-grow">
        <ToolsSection />
        <SEOContent />
      </main>
      <Footer />
    </div>
  )
}
