"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const pathways = [
  {
    title: "Need Work Done?",
    description: "Get quality software built by mentored engineers at competitive rates",
    href: "/clients",
    label: "For Clients"
  },
  {
    title: "Want to Mentor?",
    description: "Share your expertise and shape the next generation of engineers",
    href: "/mentors",
    label: "For Mentors"
  },
  {
    title: "Need Mentorship?",
    description: "Learn by doing real projects with guidance from industry experts",
    href: "/mentees",
    label: "For Mentees"
  }
]

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated grain overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-border/20 rotate-45"
          animate={{ rotate: [45, 50, 45], scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-accent/10"
          animate={{ rotate: [0, -5, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/5"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 container mx-auto px-6 lg:px-8 py-24"
      >
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8 justify-center"
          >
            <span className="px-4 py-1.5 border border-accent/30 text-accent text-sm uppercase tracking-[0.15em]">
              Launching 2026
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="text-center space-y-4">
            {["Engineering", "the Next", "Generation"].map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="overflow-hidden"
              >
                <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9] ${
                  i === 2 ? "text-accent" : "text-foreground"
                }`}>
                  {word}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed"
          >
            A new model for tech talent development. Real projects. Expert mentorship. 
            Building careers while building software.
          </motion.p>

          {/* Pathway cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 grid md:grid-cols-3 gap-4 lg:gap-6"
          >
            {pathways.map((pathway, i) => (
              <Link 
                key={pathway.title}
                href={pathway.href}
                className="group relative p-6 lg:p-8 border border-border/30 bg-card/30 backdrop-blur-sm hover:border-accent/50 hover:bg-card/50 transition-all duration-500"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <span className="text-xs uppercase tracking-[0.15em] text-accent mb-4 block">
                    {pathway.label}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                    {pathway.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {pathway.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
                
                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
