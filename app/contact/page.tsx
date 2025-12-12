"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { personalInfo } from "@/lib/data"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare, Clock } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
]

const socialLinks = [
  { icon: Github, href: personalInfo.social.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Let's Work <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing
              together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Methods */}
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <div key={method.label}>
                      {method.href ? (
                        <Link
                          href={method.href}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <method.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{method.label}</p>
                            <p className="text-foreground font-medium">{method.value}</p>
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-4 p-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <method.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{method.label}</p>
                            <p className="text-foreground font-medium">{method.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Availability
                </h2>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-foreground">Available for new projects</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">I typically respond within 24-48 hours.</p>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h2>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  )
}
