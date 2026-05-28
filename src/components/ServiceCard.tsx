import { CheckCircle } from 'lucide-react'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  items: string[]
  color: string
}

export default function ServiceCard({ icon, title, description, items, color }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex">
      <div className="w-1.5 shrink-0" style={{ backgroundColor: color }} />

      <div className="flex-1 p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-xs font-bold text-white px-2"
            style={{ backgroundColor: color }}
          >
            {icon}
          </span>
          <h3 className="text-lg font-bold text-[#03045e]">{title}</h3>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>

        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
