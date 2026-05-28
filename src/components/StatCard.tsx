interface StatCardProps {
  value: number
  prefix?: string
  suffix?: string
  label: string
  description?: string
  color?: string
}

export default function StatCard({ value, prefix = '', suffix = '', label, description, color = '#0077b6' }: StatCardProps) {
  return (
    <div
      className="rounded-2xl p-6 text-white relative overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
      <div className="relative">
        <div className="text-3xl md:text-4xl font-bold">
          {prefix}{value}{suffix}
        </div>
        <div className="mt-1 text-sm font-medium text-white/90">{label}</div>
        {description && (
          <div className="mt-2 text-xs text-white/70 leading-relaxed">{description}</div>
        )}
      </div>
    </div>
  )
}
