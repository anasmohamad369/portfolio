"use client"

import { motion } from "framer-motion"
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiSocketdotio,
  SiTailwindcss,
  SiStripe,
  SiShadcnui,
  SiExpress,
  SiJavascript,
  SiReactbootstrap,
} from "react-icons/si"

const technologies = [
  { name: "Java Script" , Icon: SiJavascript },

  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express js", Icon: SiExpress },

  { name: "MongoDB", Icon: SiMongodb },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Socket.IO", Icon: SiSocketdotio },
  { name: "Tailwind Css", Icon: SiTailwindcss },
  {name : "Bootstrap" , Icon : SiReactbootstrap},
  { name: "Shad Cn", Icon: SiShadcnui }
]

export function TechCarousel() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-12"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="flex items-center gap-3 shrink-0">
            <tech.Icon className="h-8 w-8 text-muted-foreground" />
            <span className="text-muted-foreground font-medium whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
