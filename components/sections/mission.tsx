"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, Rocket, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Real Projects",
    description: "No simulations. Our mentees work on actual client projects with real impact."
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Industry veterans mentor every step, from code reviews to career advice."
  },
  {
    icon: Rocket,
    title: "Launch Careers",
    description: "Our graduates join top companies or start their own ventures."
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Technology evolves. So do we. Always learning, always improving."
  }
]

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-accent/5 -skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Our Mission
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] mb-8"
            >
              Building talent
              <br />
              <span className="text-accent">through practice</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                Traditional education teaches theory. Bootcamps rush through basics. 
                Neither prepares engineers for the reality of building production software.
              </p>
              <p>
                NextGeneers bridges this gap. We connect aspiring engineers with real 
                client projects and experienced mentors who guide them through every challenge.
              </p>
              <p className="text-foreground font-medium">
                The result: battle-tested engineers ready for any team, and quality software 
                delivered to businesses that need it.
              </p>
            </motion.div>
          </div>

          {/* Right content - values grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="group p-6 border border-border/30 bg-card/30 hover:border-accent/30 hover:bg-card/50 transition-all duration-300"
              >
                <div className="size-12 border border-border/30 flex items-center justify-center mb-4 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                  <value.icon className="size-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
