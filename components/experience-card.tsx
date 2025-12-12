"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"

interface Experience {
  id: number
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

interface ExperienceCardProps {
  experience: Experience
  index: number
  isLast: boolean
}

export function ExperienceCard({ experience, index, isLast }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="relative pl-8 pb-12"
    >
      {/* Timeline Line */}
      {!isLast && <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-border" />}

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
        className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
      >
        <div className="w-2 h-2 rounded-full bg-primary" />
      </motion.div>

      {/* Content Card */}
      <div className="glass-card p-6 rounded-xl ml-4 group hover:border-primary/30 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-primary">
              <Briefcase className="h-4 w-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{experience.period}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements</h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
