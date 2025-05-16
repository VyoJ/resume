"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe } from "lucide-react";
import type { PersonalData } from "@/lib/data";

export default function PersonalSection({ data }: { data: PersonalData }) {
  return (
    <section aria-labelledby="personal-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <Heart className="h-5 w-5 text-primary" />
          <h2
            id="personal-heading"
            className="text-xl font-semibold tracking-tight"
          >
            Beyond the Code
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full hover:shadow-md transition-all duration-300 hover:border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Interests</h3>
                </div>
                <ul className="space-y-1">
                  {data.interests.map((interest, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    >
                      <span className="mr-2">•</span> {interest}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-md transition-all duration-300 hover:border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Languages</h3>
                </div>
                <div className="space-y-2">
                  {data.languages.map((lang, i) => (
                    <motion.div
                      key={i}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    >
                      <span className="text-sm">{lang.language}</span>
                      <Badge variant="outline" className="text-xs">
                        {lang.proficiency}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
