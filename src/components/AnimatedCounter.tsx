import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  label: string
  darkMode?: boolean
}

export default function AnimatedCounter({ value, prefix = '', suffix = '', label, darkMode = false }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const startTime = performance.now()

          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplayValue(Math.round(eased * value))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#03045e]'}`}>
        {prefix}{displayValue}{suffix}
      </div>
      <div className={`mt-2 text-sm md:text-base ${darkMode ? 'text-white/70' : 'text-[#0077b6]/70'}`}>{label}</div>
    </div>
  )
}
