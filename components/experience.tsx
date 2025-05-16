"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import type { ExperienceData } from "@/lib/data"

export default function Experience({ data }: { data: ExperienceData }) {
  return (
    <section aria-labelledby="experience-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 id="experience-heading" className="text-xl font-semibold tracking-tight">
            Experience
          </h2>
        </div>

        <div className="space-y-4">
          {data.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/20">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{job.position}</h3>
                      <p className="text-sm text-muted-foreground">
                        {job.company} • {job.location}
                      </p>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                      <Calendar className="h-3 w-3 mr-1" />
                      <time dateTime={job.startDate}>
                        {new Date(job.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </time>
                      <span className="mx-1">—</span>
                      <time dateTime={job.endDate || undefined}>
                        {job.endDate
                          ? new Date(job.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })
                          : "Present"}
                      </time>
                    </div>
                  </div>

                  <p className="text-sm mt-2">{job.description}</p>

                  <ul className="mt-2 space-y-1 text-sm">
                    {job.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="list-disc ml-4 text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {job.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs hover:bg-primary/10 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
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
