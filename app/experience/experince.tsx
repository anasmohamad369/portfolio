"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExperienceCard } from "@/components/experience-card"
import { experiences } from "@/lib/data"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20 px-4 flex-1">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Career</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                  Work <span className="text-primary">Experience</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  My professional journey building web applications and delivering impactful solutions.
                </p>
              </div>
              <Link href="/resume">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { label: "Years Experience", value: "1+" },
              { label: "Projects Delivered", value: "15+" },
              { label: "Companies", value: "1" },
              { label: "Technologies", value: "20+" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

     
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  )
}
