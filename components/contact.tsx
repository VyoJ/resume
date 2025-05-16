"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { ContactData } from "@/lib/data";

export default function Contact({ data }: { data: ContactData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <Mail className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }} // Adjusted delay for single item
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Card className="overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/20">
          <CardContent className="p-4 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Link
                  href={`mailto:${data.email}`}
                  className="text-sm hover:underline"
                >
                  {data.email}
                </Link>
              </div>

              {data.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <Link
                    href={`tel:${data.phone.replace(/\D/g, "")}`}
                    className="text-sm hover:underline"
                  >
                    {data.phone}
                  </Link>
                </div>
              )}

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{data.location}</span>
              </div>
            </div>

            <div className="text-sm">
              <p className="font-medium">Availability</p>
              <p className="text-muted-foreground">{data.availability}</p>
            </div>

            <Button className="w-full" asChild>
              <Link href={`mailto:${data.email}`}>Get In Touch</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
