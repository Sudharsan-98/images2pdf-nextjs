export default function ToolCard({ tool }) {
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    indigo: 'bg-indigo-600 hover:bg-indigo-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700'
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className={`w-12 h-12 bg-${tool.color}-100 rounded-lg flex items-center justify-center mb-4`}>
          {tool.icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
        <p className="text-gray-600 mb-4">{tool.description}</p>
        <a 
          href={tool.link} 
          className={`w-full block ${colorClasses[tool.color]} text-white font-medium py-2 px-4 rounded-lg transition-colors text-center`}
        >
          {tool.id.includes('compress') ? 'Compress Now' : 'Convert Now'}
        </a>
      </div>
    </div>
  )
}
