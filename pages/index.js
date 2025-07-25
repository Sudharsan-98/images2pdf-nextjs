import Head from 'next/head'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically load components to prevent SSR issues
const Header = dynamic(() => import('../components/Header'))
const ToolsSection = dynamic(() => import('../components/ToolsSection'))
const SEOContent = dynamic(() => import('../components/SEOContent'))
const Footer = dynamic(() => import('../components/Footer'))

export default function Home() {
  useEffect(() => {
    const loadFeatherIcons = async () => {
      if (typeof window !== 'undefined') {
        const feather = await import('feather-icons')
        feather.replace()
        setTimeout(feather.replace, 1000) // Re-run for dynamic content
      }
    }
    loadFeatherIcons()
  }, [])

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Head>
        <title>All-in-One PDF Tools – Convert, Merge, Compress, and More | images2pdf.online</title>
        <meta name="description" content="Free online PDF tools to convert images to PDF, PDF to Word, compress PDF, merge, split, unlock & protect your files. No watermark, fast & secure." />
        <meta name="keywords" content="PDF tools, image to PDF, convert PDF, compress PDF, PDF to Word, merge PDF, split PDF, unlock PDF, protect PDF, online PDF converter, free PDF tools" />
        <link rel="icon" href="/favicon.ico" />
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
