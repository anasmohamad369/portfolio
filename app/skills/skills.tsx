"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SkillCategory } from "@/components/skill-category"
import { RadialChart } from "@/components/radial-chart"
import { skills } from "@/lib/data"

const overviewSkills = [
  { label: "Frontend", value: 92, color: "#00eaff" },
  { label: "Backend", value: 88, color: "#ff00ff" },
  { label: "Database", value: 85, color: "#00ff88" },
  { label: "DevOps", value: 75, color: "#ffaa00" },
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20 px-4 flex-1">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Skills & <span className="text-primary">Technologies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive overview of my technical skills and the technologies I work with to build modern web
              applications.
            </p>
          </motion.div>

          {/* Radial Charts Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-xl mb-12"
          >
            <h2 className="text-xl font-semibold text-foreground mb-8 text-center">Skills Overview</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {overviewSkills.map((skill, index) => (
                <RadialChart
                  key={skill.label}
                  label={skill.label}
                  value={skill.value}
                  color={skill.color}
                  delay={index * 0.15}
                />
              ))}
            </div>
          </motion.div>

          {/* Skill Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory title="Frontend Development" skills={skills.frontend} icon="frontend" index={0} />
            <SkillCategory title="Backend Development" skills={skills.backend} icon="backend" index={1} />
            <SkillCategory title="Databases" skills={skills.databases} icon="databases" index={2} />
            <SkillCategory title="DevOps & Cloud" skills={skills.devops} icon="devops" index={3} />
            <SkillCategory title="Tools & Platforms" skills={skills.tools} icon="tools" index={4} />

            {/* Experience Note Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="glass-card p-6 rounded-xl flex flex-col justify-center"
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">1+</div>
                <div className="text-lg font-medium text-foreground mb-2">Years of Experience</div>
                <p className="text-sm text-muted-foreground">
                  Building full-stack applications with focus on backend & frontend integrations at Ryzer and freelance
                  projects.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Technology Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-xl font-semibold text-foreground mb-8">Technologies I Work With</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "TypeScript",
                "Socket.IO",
                "Tailwind CSS",
                "Framer Motion",
                "Redis",
                "Docker",
                "AWS",
                "Vercel",
                "Git",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="px-4 py-2 glass-card rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  )
}
