"use client"

import { motion, useInView } from "framer-motion"
import { 
  Users, GraduationCap, FileText, Award, Briefcase, FolderKanban,
  Code, Rocket, Cog, BarChart3, MessageSquare, ArrowRight
} from "lucide-react"
import { useRef } from "react"

const divisions = [
  {
    id: "talent",
    label: "01",
    title: "Talent Division",
    subtitle: "Mentorship & Development",
    description: "A mentorship-driven program designed to help aspiring technologists gain real-world skills, industry guidance, and career opportunities through hands-on experience.",
    features: [
      { icon: Users, label: "Mentorship Programs" },
      { icon: FileText, label: "Resume & Interview Prep" },
      { icon: Award, label: "Certification Support" },
      { icon: FolderKanban, label: "Portfolio Development" },
      { icon: GraduationCap, label: "Community Learning" },
      { icon: Briefcase, label: "Career Placement" },
    ],
    cta: "Join the Program",
  },
  {
    id: "solutions",
    label: "02",
    title: "Solutions Division",
    subtitle: "Technology & Consulting",
    description: "A technology consulting division delivering software solutions while creating opportunities for emerging engineers to gain real project experience alongside seasoned professionals.",
    features: [
      { icon: Code, label: "Web Development" },
      { icon: Rocket, label: "Startup MVP Development" },
      { icon: Cog, label: "Automation Tools" },
      { icon: BarChart3, label: "Data Dashboards" },
      { icon: MessageSquare, label: "Software Consulting" },
      { icon: FolderKanban, label: "Project Management" },
    ],
    cta: "Start a Project",
  },
]

export function Divisions() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
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
              Our Divisions
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
            Two Pillars of
            <br />
            <span className="text-accent">Excellence</span>
          </h2>
        </motion.div>

        {/* Division cards */}
        <div className="space-y-24 lg:space-y-32">
          {divisions.map((division, index) => (
            <motion.div
              key={division.id}
              id={division.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-7xl lg:text-8xl font-bold text-border/30 tracking-tighter">
                    {division.label}
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
                  {division.title}
                </h3>
                <p className="text-accent text-lg font-medium mb-6">
                  {division.subtitle}
                </p>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                  {division.description}
                </p>
                
                <button className="group inline-flex items-center gap-2 text-foreground uppercase tracking-wider text-sm font-medium">
                  <span className="relative">
                    {division.cta}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
                </button>
              </div>

              {/* Features grid */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {division.features.map((feature, i) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="group relative p-6 border border-border/30 bg-card/30 hover:border-border/60 hover:bg-card/50 transition-all duration-300"
                    >
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      
                      <feature.icon className="size-6 text-muted-foreground group-hover:text-accent transition-colors mb-4" />
                      <span className="text-sm text-foreground font-medium leading-tight block">
                        {feature.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Corner accent */}
                <div className={`absolute ${index % 2 === 0 ? "-right-4" : "-left-4"} top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
