"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilters } from "@/components/project-filters"
import { projects } from "@/lib/data"
import { LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "Real-time", "Web Apps", "Dashboards", "MERN"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20 px-4 flex-1">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects showcasing my expertise in full-stack development, real-time applications, and
              modern web technologies.
            </p>
          </motion.div>

          {/* Filters and View Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
          >
            <ProjectFilters
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <div className="flex items-center gap-2 glass-card p-1 rounded-lg">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setViewMode("grid")}
                className={cn("h-8 w-8", viewMode === "grid" && "bg-primary text-primary-foreground")}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setViewMode("list")}
                className={cn("h-8 w-8", viewMode === "list" && "bg-primary text-primary-foreground")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className={cn(
              "grid gap-6",
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
            )}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project as any} index={index} />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </motion.div>
          )}

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              { label: "Projects Completed", value: "15+" },
              { label: "Technologies Used", value: "20+" },
              { label: "Lines of Code", value: "100K+" },
              { label: "Happy Clients", value: "10+" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
