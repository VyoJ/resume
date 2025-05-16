"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar } from "lucide-react";
import type { EducationData } from "@/lib/data";

export default function Education({ data }: { data: EducationData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
      </div>

      <div className="space-y-4">
        {data.map((edu, index) => (
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
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                    <Calendar className="h-3 w-3 mr-1" />
                    <time dateTime={edu.startDate}>
                      {new Date(edu.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                    <span className="mx-1">—</span>
                    <time dateTime={edu.endDate}>
                      {new Date(edu.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>

                {edu.gpa && <p className="text-sm mt-2">GPA: {edu.gpa}</p>}

                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="mt-2 space-y-1 text-sm">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="list-disc ml-4 text-muted-foreground"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
