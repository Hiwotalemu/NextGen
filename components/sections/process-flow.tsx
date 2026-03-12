"use client"

import { motion, useInView } from "framer-motion"
import { UserPlus, BookOpen, Briefcase, Building2, RefreshCw } from "lucide-react"
import { useRef } from "react"

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Talent Joins",
    description: "Aspiring engineers join our mentorship program to begin their development journey.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Skills Development",
    description: "Engineers develop technical skills, build portfolios, and gain industry certifications.",
  },
  {
    icon: Briefcase,
    number: "03",
    title: "Real Project Work",
    description: "Teams collaborate on real consulting projects, gaining hands-on experience.",
  },
  {
    icon: Building2,
    number: "04",
    title: "Business Solutions",
    description: "Businesses receive high-quality software solutions from skilled engineers.",
  },
  {
    icon: RefreshCw,
    number: "05",
    title: "Reinvestment",
    description: "Revenue and experience are reinvested back into talent development.",
  },
]

export function ProcessFlow() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-32 lg:py-40 relative bg-card/30">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              How It Works
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter max-w-2xl">
              The NextGeneers
              <br />
              <span className="text-accent">Model</span>
            </h2>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              A sustainable cycle that develops talent while delivering 
              exceptional value to businesses.
            </p>
          </div>
        </motion.div>

        {/* Process steps - horizontal timeline */}
        <div className="relative">
          {/* Connection line */}
          <motion.div 
            className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-border/50"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="relative group"
              >
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Step number with icon */}
                  <div className="relative mb-8">
                    <div className="size-32 border border-border/30 bg-background flex flex-col items-center justify-center group-hover:border-accent/50 transition-all duration-500">
                      <span className="text-4xl font-bold text-border/40 tracking-tighter mb-2">
                        {step.number}
                      </span>
                      <step.icon className="size-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                    </div>
                    
                    {/* Active dot on timeline */}
                    <div className="hidden lg:block absolute -bottom-[2.5rem] left-1/2 -translate-x-1/2">
                      <motion.div 
                        className="size-3 rounded-full bg-border group-hover:bg-accent transition-colors duration-300"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
