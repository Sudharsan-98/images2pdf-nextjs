import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../components/Header'
import ToolsSection from '../components/ToolsSection'
import SEOContent from '../components/SEOContent'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    // Load feather icons
    if (typeof window !== 'undefined') {
      const feather = require('feather-icons')
      feather.replace()
    }
  }, [])

  return (
    <div className="font-sans bg-gray-50">
      <Head>
        <title>All-in-One PDF Tools – Convert, Merge, Compress, and More | images2pdf.online</title>
        <meta name="description" content="Free online PDF tools to convert images to PDF, PDF to Word, compress PDF, merge, split, unlock & protect your files. No watermark, fast & secure." />
        <meta name="keywords" content="PDF tools, image to PDF, convert PDF, compress PDF, PDF to Word, merge PDF, split PDF, unlock PDF, protect PDF, online PDF converter, free PDF tools" />
      </Head>

      <Header />
      <ToolsSection />
      <SEOContent />
      <Footer />
    </div>
  )
}