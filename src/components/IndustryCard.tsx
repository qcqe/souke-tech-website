interface IndustryCardProps {
  name: string
  description: string
  detail: string
  color: string
}

export default function IndustryCard({ name, description, detail, color }: IndustryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="h-1.5" style={{ backgroundColor: color }} />

      <div className="p-6">
        <h3 className="text-lg font-bold text-[#03045e] mb-2">{name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{description}</p>
        <p className="text-sm text-[#0077b6]/80 leading-relaxed">{detail}</p>
      </div>
    </div>
  )
}
