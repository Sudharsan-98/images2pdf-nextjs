import Link from 'next/link';

export default function ToolsSection() {
  return (
    <section id="tools" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our PDF Tools</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Convert Image to PDF */}
          <div className="tool-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100" data-tool="image-to-pdf">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Image to PDF</h3>
              <p className="text-gray-600 mb-4">Convert your images to PDF format easily.</p>
              <Link href="/image-to-pdf" className="w-full block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center">
                Convert Now
              </Link>
            </div>
          </div>

          {/* Other tool cards... */}
          {/* You would add the other tool cards (PDF to Image, Compress PDF, Merge PDF) here */}
          {/* Follow the same pattern as the Image to PDF card above */}
        </div>
      </div>
    </section>
  );
}
