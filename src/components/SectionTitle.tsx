import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle: string
  align?: 'left' | 'center'
}

export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <div className={cn('mb-12', align === 'center' ? 'text-center' : 'text-left')}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#03045e] mb-3">
        {title}
      </h2>
      <p className="text-sm md:text-base text-[#0077b6]/70 tracking-widest uppercase mb-4">
        {subtitle}
      </p>
      <div
        className={cn(
          'h-1 w-16 rounded-full bg-gradient-to-r from-[#0077b6] to-[#00b4d8]',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
    </div>
  )
}
