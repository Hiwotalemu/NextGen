"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Linkedin, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Software Architect",
    company: "Former Google",
    image: "/mentors/mentor-1.jpg",
    expertise: ["System Design", "Cloud Architecture"],
    bio: "15+ years building scalable systems at top tech companies.",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Engineering Director",
    company: "Former Microsoft",
    image: "/mentors/mentor-2.jpg",
    expertise: ["Team Building", "Agile"],
    bio: "Led teams of 50+ engineers across multiple continents.",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Principal Engineer",
    company: "Former Amazon",
    image: "/mentors/mentor-3.jpg",
    expertise: ["Backend Systems", "DevOps"],
    bio: "Passionate about helping engineers reach their full potential.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Tech Lead",
    company: "Former Meta",
    image: "/mentors/mentor-4.jpg",
    expertise: ["Frontend", "React"],
    bio: "Built products used by billions of users worldwide.",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "Staff Engineer",
    company: "Former Apple",
    image: "/mentors/mentor-5.jpg",
    expertise: ["Mobile Dev", "iOS"],
    bio: "Shipped features in apps with 100M+ downloads.",
  },
  {
    id: 6,
    name: "James Thompson",
    role: "VP of Engineering",
    company: "Former Netflix",
    image: "/mentors/mentor-6.jpg",
    expertise: ["Streaming", "Infrastructure"],
    bio: "Architected systems serving 200M+ subscribers.",
  },
]

export function Mentors() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % mentors.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + mentors.length) % mentors.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const getVisibleMentors = () => {
    const visible = []
    for (let i = -1; i <= 2; i++) {
      const index = (currentIndex + i + mentors.length) % mentors.length
      visible.push({ ...mentors[index], position: i })
    }
    return visible
  }

  return (
    <section ref={containerRef} className="py-32 lg:py-40 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px)`,
            backgroundSize: '120px 120px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Our Mentors
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter max-w-2xl">
              Learn from
              <br />
              <span className="text-accent">Industry Leaders</span>
            </h2>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              Our mentors bring decades of experience from top tech companies 
              to guide your engineering journey.
            </p>
          </div>
        </motion.div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              {mentors.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-px transition-all duration-500 ${
                    idx === currentIndex 
                      ? "w-12 bg-accent" 
                      : "w-6 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="size-12 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={nextSlide}
                className="size-12 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          {/* Cards Container */}
          <div className="relative h-[500px] lg:h-[550px]">
            <AnimatePresence mode="popLayout">
              {getVisibleMentors().map((mentor) => {
                const isCenter = mentor.position === 0
                const isRight = mentor.position === 1
                const isFarRight = mentor.position === 2
                const isLeft = mentor.position === -1

                return (
                  <motion.div
                    key={`${mentor.id}-${mentor.position}`}
                    initial={{ 
                      opacity: 0, 
                      x: 300,
                      scale: 0.8
                    }}
                    animate={{ 
                      opacity: isLeft ? 0.3 : isFarRight ? 0.5 : 1,
                      x: isLeft ? -100 : isCenter ? 0 : isRight ? 380 : 700,
                      scale: isCenter ? 1 : 0.85,
                      zIndex: isCenter ? 10 : isRight ? 5 : 1
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: -300,
                      scale: 0.8
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    className={`absolute top-0 left-0 lg:left-8 w-[340px] lg:w-[360px] ${
                      isLeft ? "hidden lg:block" : ""
                    } ${isFarRight ? "hidden xl:block" : ""}`}
                  >
                    <div className="group relative bg-card border border-border/30 overflow-hidden h-[500px] lg:h-[550px]">
                      {/* Image */}
                      <div className="relative h-[55%] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card z-10" />
                        <motion.div
                          className="w-full h-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.8 }}
                        >
                          <Image
                            src={mentor.image}
                            alt={mentor.name}
                            fill
                            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                            sizes="360px"
                          />
                        </motion.div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />
                      </div>

                      {/* Content */}
                      <div className="relative p-6 h-[45%] flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-foreground tracking-tight">{mentor.name}</h3>
                              <p className="text-accent text-sm font-medium">{mentor.role}</p>
                            </div>
                            <button className="size-10 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all group/btn">
                              <Linkedin className="size-4" />
                            </button>
                          </div>
                          <p className="text-muted-foreground text-sm mb-1">{mentor.company}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{mentor.bio}</p>
                        </div>
                        
                        {/* Expertise tags */}
                        <div className="flex flex-wrap gap-2">
                          {mentor.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 text-xs uppercase tracking-wider border border-border/30 text-muted-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-accent/50 to-transparent" />
                      <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-accent/50 to-transparent" />
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-border/30"
        >
          <p className="text-muted-foreground max-w-md">
            Want to become a mentor and give back to the engineering community?
          </p>
          <button className="group inline-flex items-center gap-2 text-foreground uppercase tracking-wider text-sm font-medium">
            <span className="relative">
              Apply as a Mentor
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
