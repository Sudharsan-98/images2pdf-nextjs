import React from 'react';

export default function SEOContent() {
  const features = [
    {
      id: 'image-to-pdf',
      title: 'Image to PDF',
      description: 'Convert JPG, PNG, BMP, or WEBP to high-quality PDF documents. Perfect for portfolios, receipts, and document archiving.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      )
    },
    // Add other features with unique IDs...
  ];

  const comingSoonTools = [
    'PDF Splitter',
    'PDF Unlock',
    'PDF to Word',
    'Word to PDF',
    'Excel to PDF',
    'PDF Rotate'
  ];

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="seo-content-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 id="seo-content-heading" className="text-3xl font-bold text-gray-800 mb-4">
            Free Online PDF Tools - Convert, Compress & Merge Files Instantly
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong className="text-blue-600">images2pdf.online</strong> provides the fastest, most secure PDF solutions completely free. No watermarks. No registration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => (
            <article key={feature.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-blue-600 flex items-center">
                {feature.icon}
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>

        <aside className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 mb-12 text-center shadow-lg" aria-label="Coming soon tools">
          <h2 className="text-2xl font-bold text-white mb-4">Exciting New Tools Coming Soon!</h2>
          <p className="text-blue-100 mb-6">We're expanding our toolkit to become your complete PDF solution center.</p>
          
          <ul className="flex flex-wrap justify-center gap-3" aria-label="List of upcoming tools">
            {comingSoonTools.map((tool, index) => (
              <li key={index}>
                <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium">
                  {tool}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="text-center">
          <a 
            href="#tools" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-block transition duration-300 shadow-md hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            aria-label="Get started with our PDF tools"
          >
            Start Converting Now - 100% Free
          </a>
          <p className="text-sm text-gray-500 mt-3">No registration required • No watermarks • Unlimited use</p>
        </div>
      </div>
    </section>
  );
}
