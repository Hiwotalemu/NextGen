"use client"

import { motion, useSpring, useTransform, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Engineers Mentored" },
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 85, suffix: "", label: "Certifications Funded" },
  { value: 40, suffix: "+", label: "Industry Mentors" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const spring = useSpring(0, { duration: 2000 })
  const display = useTransform(spring, (current) => Math.floor(current))
  
  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])
  
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

export function Impact() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Our Impact
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">
            Numbers That
            <br />
            <span className="text-accent">Matter</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/30">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-background p-8 lg:p-12 group"
            >
              <div className="text-center">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter group-hover:text-accent transition-colors duration-500">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-4 h-px w-12 mx-auto bg-border group-hover:bg-accent group-hover:w-20 transition-all duration-500" />
                <p className="mt-4 text-muted-foreground text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
