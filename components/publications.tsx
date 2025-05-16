"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { PublicationData } from "@/lib/data";

export default function Publications({ data }: { data: PublicationData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold tracking-tight">Publications</h2>
      </div>

      <div className="space-y-4">
        {data.map((pub, index) => (
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
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-medium">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {pub.publisher} • {formatDate(pub.date)}
                    </p>
                  </div>

                  {pub.link && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 -mt-1"
                      asChild
                    >
                      <Link
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Read Publication</span>
                      </Link>
                    </Button>
                  )}
                </div>

                {pub.description && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {pub.description}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
