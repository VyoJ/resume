import type { PortfolioData } from "@/lib/data"

export function generateJsonLd(data: PortfolioData) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.profile.name,
    jobTitle: data.profile.title,
    description: data.profile.summary,
    email: data.profile.email,
    telephone: data.profile.phone,
    url: data.profile.website,
    image: data.profile.photo,
    sameAs: [
      data.profile.socialLinks.github,
      data.profile.socialLinks.linkedin,
      data.profile.socialLinks.twitter,
    ].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: data.profile.location,
    },
    alumniOf: data.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      sameAs: `https://en.wikipedia.org/wiki/${edu.institution.replace(/ /g, "_")}`,
    })),
    knowsAbout: data.skills.flatMap((category) => category.items),
    worksFor:
      data.experience[0]?.endDate === null
        ? {
            "@type": "Organization",
            name: data.experience[0].company,
          }
        : undefined,
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${data.profile.name}'s Portfolio`,
    url: data.profile.website,
    description: `Professional portfolio of ${data.profile.name}, ${data.profile.title}`,
    author: {
      "@type": "Person",
      name: data.profile.name,
    },
  }

  // Create schema for each project as CreativeWork
  const projects = data.projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    programmingLanguage: project.technologies,
    codeRepository: project.github,
    url: project.link,
    author: {
      "@type": "Person",
      name: data.profile.name,
    },
  }))

  // Combine all schema objects
  return [person, website, ...projects]
}
