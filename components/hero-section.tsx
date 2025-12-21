"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroScene } from "@/components/hero-scene"
import { TypingAnimation } from "@/components/typing-animation"
import { TechCarousel } from "@/components/tech-carousel"
import { personalInfo } from "@/lib/data"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <HeroScene />

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
            >
              <span className="glitch-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-10"
            >
              <TypingAnimation words={personalInfo.taglines} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              {personalInfo.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/projects">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary group bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 mt-10"
            >
              <Link
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <div className="h-6 w-px bg-border mx-2" />
              <span className="text-sm text-muted-foreground">{personalInfo.email}</span>
            </motion.div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-muted/20 shadow-2xl glass-card">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />xdlkcnm'c
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </motion.div> */}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-auto"
      >
        <TechCarousel />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
