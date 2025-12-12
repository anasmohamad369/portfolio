"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: {
    id: number
    name: string
    description: string
    image: string
    technologies: string[]
    category: string
    github: string
    live: string
    role: string
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative glass-card rounded-xl overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className={cn("object-cover transition-transform duration-500", isHovered && "scale-110")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/30">
            {project.category}
          </Badge>
        </div>

        {/* Links Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute top-4 right-4 flex gap-2"
        >
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={project.live} target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <motion.div animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronRight className="h-5 w-5 text-primary" />
          </motion.div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

        {/* Role */}
        <p className="text-xs text-primary mb-4 font-medium">{project.role}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs border-border text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 60px rgba(0, 234, 255, 0.1)",
        }}
      />
    </motion.div>
  )
}
