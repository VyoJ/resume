"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { ProjectData } from "@/lib/data"

export default function Projects({ data }: { data: ProjectData }) {
  // Filter featured projects first
  const featuredProjects = data.filter((project) => project.featured)
  const otherProjects = data.filter((project) => !project.featured)

  // Combine them with featured projects first
  const sortedProjects = [...featuredProjects, ...otherProjects]

  return (
    <section aria-labelledby="projects-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <Layers className="h-5 w-5 text-primary" />
          <h2 id="projects-heading" className="text-xl font-semibold tracking-tight">
            Projects
          </h2>
        </div>

        <div className="space-y-4">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/20">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    {project.image && (
                      <motion.div
                        className="relative h-24 w-40 rounded overflow-hidden flex-shrink-0 mx-auto md:mx-0"
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    )}

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <h3 className="font-semibold">{project.title}</h3>
                        <div className="flex gap-2">
                          {project.github && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 hover:scale-110 transition-transform duration-200"
                              asChild
                            >
                              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                              </Link>
                            </Button>
                          )}

                          {project.link && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 hover:scale-110 transition-transform duration-200"
                              asChild
                            >
                              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                <span className="sr-only">Live Demo</span>
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mt-1">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs hover:bg-primary/10 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
