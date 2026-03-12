"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ChevronRight } from "lucide-react"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.25 0.02 45 / 0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.20 0.015 50 / 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-border/20"
            style={{ top: `${20 + i * 15}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
          />
        ))}
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 container mx-auto px-6 lg:px-8"
      >
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Engineering Excellence
            </span>
          </motion.div>

          {/* Main headline - stacked dramatic text */}
          <div className="space-y-2">
            {["Engineering", "the Next", "Generation"].map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.3 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="overflow-hidden"
              >
                <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] ${
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
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            A startup on a mission to develop world-class engineers through real 
            projects while delivering innovative software solutions to industry.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Button 
              size="lg" 
              className="group h-14 px-8 bg-foreground text-background hover:bg-foreground/90 rounded-none uppercase tracking-wider text-sm font-medium"
            >
              Start Your Journey
              <ChevronRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="group h-14 px-8 text-foreground hover:bg-transparent hover:text-accent rounded-none uppercase tracking-wider text-sm font-medium"
            >
              <span className="relative">
                Our Services
                <span className="absolute bottom-0 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-5 text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-px h-32 bg-gradient-to-t from-accent/50 to-transparent" />
      <div className="absolute bottom-0 right-0 h-px w-32 bg-gradient-to-l from-accent/50 to-transparent" />
    </section>
  )
}
