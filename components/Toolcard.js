// components/ToolCard.js
import Link from 'next/link';

export default function ToolCard({
  title,
  description,
  icon,
  bgColor,
  buttonColor,
  href
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={href} 
          className={`w-full block ${buttonColor} text-white font-medium py-2 px-4 rounded-lg transition-colors text-center`}
        >
          {title.startsWith('Image') ? 'Convert Now' : title.startsWith('PDF') ? 'Extract Now' : title.split(' ')[0] + ' Now'}
        </Link>
      </div>
    </div>
  );
}
