export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <h2 className="text-2xl font-bold">images2pdf.online</h2>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-200 transition-colors">Home</a></li>
              <li><a href="#tools" className="hover:text-blue-200 transition-colors">Tools</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Help</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-12 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">All-in-one PDF Solution</h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">Convert, compress, merge, split, and edit your PDF files with ease.</p>
        </div>
      </div>
    </header>
  )
}
