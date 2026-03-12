"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Architect",
    company: "Former Google",
    image: "/mentors/mentor-1.jpg",
    specialty: "System Design"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Engineering Director",
    company: "Former Microsoft",
    image: "/mentors/mentor-2.jpg",
    specialty: "Leadership"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Principal Engineer",
    company: "Former Amazon",
    image: "/mentors/mentor-3.jpg",
    specialty: "Cloud Architecture"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Tech Lead",
    company: "Former Meta",
    image: "/mentors/mentor-4.jpg",
    specialty: "Frontend"
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "Staff Engineer",
    company: "Former Apple",
    image: "/mentors/mentor-5.jpg",
    specialty: "iOS Development"
  },
  {
    id: 6,
    name: "James Mitchell",
    role: "VP of Engineering",
    company: "Former Netflix",
    image: "/mentors/mentor-6.jpg",
    specialty: "Scaling Systems"
  },
]

export function MentorSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mentors.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 lg:py-32 bg-card/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 60px),
                           repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 60px)`
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-accent" />
          <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Our Mentors
          </span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9]">
            Learn from
            <br />
            <span className="text-accent">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Our mentors bring decades of experience from top tech companies, 
            ready to guide you on your engineering journey.
          </p>
        </div>

        {/* Slideshow container */}
        <div className="relative h-[500px] lg:h-[600px]">
          <AnimatePresence mode="wait">
            {mentors.map((mentor, index) => (
              index === currentIndex && (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
                >
                  {/* Image */}
                  <div className="relative w-full lg:w-1/2 h-64 lg:h-full">
                    <div className="absolute inset-0 border border-border/30" />
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="relative w-full h-full overflow-hidden"
                    >
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </motion.div>
                    
                    {/* Specialty tag */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-4 left-4 px-4 py-2 bg-accent text-accent-foreground text-sm uppercase tracking-wider"
                    >
                      {mentor.specialty}
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="w-full lg:w-1/2 lg:pl-8">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-7xl lg:text-9xl font-bold text-border/30 leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                    
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl lg:text-5xl font-bold tracking-tight -mt-8 lg:-mt-12"
                    >
                      {mentor.name}
                    </motion.h3>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-4 space-y-1"
                    >
                      <p className="text-xl text-foreground">{mentor.role}</p>
                      <p className="text-muted-foreground">{mentor.company}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Progress indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 lg:justify-start">
            {mentors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group relative h-1 w-12 bg-border/30 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: index === currentIndex ? 1 : 0 }}
                  transition={{ 
                    duration: index === currentIndex ? 4 : 0.3,
                    ease: "linear"
                  }}
                  style={{ transformOrigin: "left" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
