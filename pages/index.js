// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import ToolsSection from '../components/ToolsSection';
import FeaturesSection from '../components/FeaturesSection';
import SEOContent from '../components/SEOContent';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>All-in-One PDF Tools – Convert, Merge, Compress, and More | images2pdf.online</title>
        <meta name="description" content="Free online PDF tools to convert images to PDF, PDF to Word, compress PDF, merge, split, unlock & protect your files. No watermark, fast & secure." />
        <meta name="keywords" content="PDF tools, image to PDF, convert PDF, compress PDF, PDF to Word, merge PDF, split PDF, unlock PDF, protect PDF, online PDF converter, free PDF tools" />
      </Head>

      <Header />
      <main className="flex-grow">
        <ToolsSection />
        <FeaturesSection />
        <SEOContent />
      </main>
      <Footer />
    </div>
  );
}
