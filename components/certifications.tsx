"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { CertificationData } from "@/lib/data"

export default function Certifications({ data }: { data: CertificationData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <Award className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold tracking-tight">Certifications</h2>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-4 space-y-3">
          {data.map((cert, index) => (
            <div key={index} className="flex justify-between items-start gap-2 py-1">
              <div>
                <h3 className="text-sm font-medium">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {cert.issuer} • {formatDate(cert.date)}
                </p>
              </div>

              {cert.link && (
                <Button variant="ghost" size="icon" className="h-8 w-8 -mt-1" asChild>
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span className="sr-only">View Certificate</span>
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
}
