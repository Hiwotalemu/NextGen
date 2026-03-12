"use client"

import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"

export function Partnership() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-32 lg:py-40 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative border border-border/30 bg-card/20 overflow-hidden">
          {/* Background grid */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-accent to-transparent" />
          <div className="absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-accent to-transparent" />
          <div className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-accent to-transparent" />
          <div className="absolute bottom-0 right-0 h-24 w-px bg-gradient-to-t from-accent to-transparent" />
          
          <div className="relative z-10 p-12 sm:p-16 lg:p-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-accent" />
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Partnership
                    </span>
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                    Let's Build
                    <br />
                    <span className="text-accent">Together</span>
                  </h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-10">
                    Partner with us to build innovative technology solutions while 
                    supporting the development of emerging engineering talent. 
                    Together, we create lasting impact.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="group h-14 px-8 bg-foreground text-background hover:bg-foreground/90 uppercase tracking-wider text-sm font-medium inline-flex items-center gap-2 transition-colors">
                      Work With Us
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                    <button className="group h-14 px-8 border border-border/50 text-foreground hover:border-foreground uppercase tracking-wider text-sm font-medium inline-flex items-center gap-2 transition-colors">
                      <span className="relative">
                        Partner With Our Program
                        <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      </span>
                    </button>
                  </div>
                </motion.div>
              </div>
              
              {/* Visual element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="aspect-square relative">
                  {/* Animated rings */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border border-border/20 rounded-full"
                      style={{
                        inset: `${i * 15}%`,
                      }}
                      animate={{
                        rotate: i % 2 === 0 ? 360 : -360,
                      }}
                      transition={{
                        duration: 30 + i * 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  ))}
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-7xl font-bold text-accent tracking-tighter">NG</span>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">NextGeneers</p>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-1/4 -left-4 px-4 py-2 bg-card border border-border/30 text-sm"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Enterprise Solutions
                  </motion.div>
                  <motion.div
                    className="absolute bottom-1/4 -right-4 px-4 py-2 bg-card border border-border/30 text-sm"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Talent Pipeline
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 left-1/3 px-4 py-2 bg-card border border-border/30 text-sm"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Community Impact
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
