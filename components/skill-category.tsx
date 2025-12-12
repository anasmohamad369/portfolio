"use client"

import { motion } from "framer-motion"
import { SkillBar } from "./skill-bar"
import { Code2, Server, Database, Cloud, Wrench, type LucideIcon } from "lucide-react"

interface Skill {
  name: string
  level: number
}

interface SkillCategoryProps {
  title: string
  skills: Skill[]
  icon: string
  index: number
}

const iconMap: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  databases: Database,
  devops: Cloud,
  tools: Wrench,
}

export function SkillCategory({ title, skills, icon, index }: SkillCategoryProps) {
  const Icon = iconMap[icon] || Code2

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card p-6 rounded-xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
        ))}
      </div>
    </motion.div>
  )
}
