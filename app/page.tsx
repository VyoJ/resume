import type { Metadata } from "next";
import { Suspense } from "react";
import Profile from "@/components/profile";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Publications from "@/components/publications";
import Contact from "@/components/contact";
import PersonalSection from "@/components/personal-section";
import { Skeleton } from "@/components/ui/skeleton";
import { getData } from "@/lib/data";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTopButton from "@/components/scroll-to-top";
import { generateJsonLd } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();

  if (data == null) {
    return {
      title: "Error",
      description: "An error occurred while fetching data.",
    };
  }

  return {
    title: `${data.profile.name} | ${data.profile.title}`,
    description: data.profile.summary,
    keywords: [
      "developer",
      "portfolio",
      ...data.skills.flatMap((category) => category.items).slice(0, 10),
    ],
    authors: [{ name: data.profile.name, url: data.profile.website }],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: data.profile.website,
      title: `${data.profile.name} | ${data.profile.title}`,
      description: data.profile.summary,
      siteName: `${data.profile.name}'s Portfolio`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: data.profile.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.profile.name} | ${data.profile.title}`,
      description: data.profile.summary,
      creator: data.profile.socialLinks.twitter?.split("/").pop() || "",
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: data.profile.website,
    },
  };
}

export default async function Home() {
  const data = await getData();

  if (data == null) {
    return (
      <main className="min-h-screen max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center text-lg text-red-500">
          Temporarily unavailable. Please check back later.
        </div>
      </main>
    );
  }

  const jsonLd = generateJsonLd(data);

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Suspense fallback={<Skeleton className="h-40 w-full rounded-lg" />}>
        <Profile data={data.profile} />
      </Suspense>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2 space-y-8">
          <Suspense fallback={<Skeleton className="h-60 w-full rounded-lg" />}>
            <Experience data={data.experience} />
          </Suspense>

          <Suspense fallback={<Skeleton className="h-40 w-full rounded-lg" />}>
            <Education data={data.education} />
          </Suspense>

          <Suspense fallback={<Skeleton className="h-60 w-full rounded-lg" />}>
            <Projects data={data.projects} />
          </Suspense>

          <Suspense fallback={<Skeleton className="h-40 w-full rounded-lg" />}>
            <Publications data={data.publications} />
          </Suspense>
        </div>

        <div className="space-y-8">
          <Suspense fallback={<Skeleton className="h-60 w-full rounded-lg" />}>
            <Skills data={data.skills} />
          </Suspense>

          <Suspense fallback={<Skeleton className="h-40 w-full rounded-lg" />}>
            <Certifications data={data.certifications} />
          </Suspense>

          <Suspense fallback={<Skeleton className="h-40 w-full rounded-lg" />}>
            <PersonalSection data={data.personal} />
          </Suspense>

          <Suspense fallback={<Skeleton className="h-40 w-full rounded-lg" />}>
            <Contact data={data.contact} />
          </Suspense>
        </div>
      </div>

      <ScrollToTopButton />
      <Toaster />
    </main>
  );
}
