"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Download,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import type { ProfileData } from "@/lib/data";

export default function Profile({ data }: { data: ProfileData }) {
  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email);
    toast({
      title: "Email copied to clipboard",
      description: `${data.email} is now in your clipboard.`,
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-primary/10 hover:border-primary/20 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <motion.div
              className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-primary/10 flex-shrink-0 mx-auto md:mx-0"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Image
                src={data.photo || "/placeholder.svg"}
                alt={data.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h1 className="text-3xl font-bold tracking-tight">
                  {data.name}
                </h1>
                <p className="text-xl text-muted-foreground">{data.title}</p>
              </motion.div>

              <motion.p
                className="text-sm text-muted-foreground max-w-3xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {data.summary}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 justify-center md:justify-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Badge
                  variant="outline"
                  className="flex items-center gap-1 hover:bg-muted transition-colors duration-200"
                >
                  <MapPin className="h-3 w-3" />
                  {data.location}
                </Badge>

                <Badge
                  variant="outline"
                  className="flex items-center gap-1 cursor-pointer hover:bg-muted transition-colors duration-200"
                  onClick={copyEmail}
                >
                  <Mail className="h-3 w-3" />
                  {data.email}
                </Badge>

                {data.phone && (
                  <Badge
                    variant="outline"
                    className="hover:bg-muted transition-colors duration-200"
                  >
                    {data.phone}
                  </Badge>
                )}
              </motion.div>

              <motion.div
                className="flex gap-2 justify-center md:justify-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {data.socialLinks.github && (
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <Link
                      href={data.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                )}

                {data.socialLinks.linkedin && (
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <Link
                      href={data.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                )}

                {data.socialLinks.twitter && (
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <Link
                      href={data.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                )}

                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <Link href={`mailto:${data.email}`}>
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                asChild
                className="group transition-all duration-300 hover:shadow-md"
              >
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 group-hover:animate-bounce" />
                  Resume
                </Link>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
