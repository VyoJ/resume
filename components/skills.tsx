"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code } from "lucide-react"
import type { SkillData } from "@/lib/data"

export default function Skills({ data }: { data: SkillData }) {
  return (
    <section aria-labelledby="skills-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <Code className="h-5 w-5 text-primary" />
          <h2 id="skills-heading" className="text-xl font-semibold tracking-tight">
            Skills
          </h2>
        </div>

        <Card className="overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/20">
          <CardContent className="p-4 space-y-4">
            {data.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-sm font-medium mb-2">{category.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.1 + i * 0.03 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                      <Badge variant="outline" className="text-xs hover:bg-primary/10 transition-colors duration-200">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
