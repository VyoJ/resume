import fs from "fs/promises";
import path from "path";

export type ProfileData = {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  photo: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    other?: { name: string; url: string }[];
  };
};

export type ExperienceData = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
}[];

export type EducationData = {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}[];

export type SkillData = {
  category: string;
  items: string[];
}[];

export type ProjectData = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  featured: boolean;
}[];

export type CertificationData = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}[];

export type PublicationData = {
  title: string;
  publisher: string;
  date: string;
  link?: string;
  description?: string;
}[];

export type PersonalData = {
  interests: string[];
  languages: { language: string; proficiency: string }[];
};

export type ContactData = {
  email: string;
  phone?: string;
  location: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    other?: { name: string; url: string }[];
  };
};

export type PortfolioData = {
  profile: ProfileData;
  experience: ExperienceData;
  education: EducationData;
  skills: SkillData;
  projects: ProjectData;
  certifications: CertificationData;
  publications: PublicationData;
  personal: PersonalData;
  contact: ContactData;
};

export async function getData(): Promise<PortfolioData | null> {
  try {
    const filePath = path.join(process.cwd(), "data/portfolio.json");
    const jsonData = await fs.readFile(filePath, "utf8");
    return JSON.parse(jsonData) as PortfolioData;
  } catch (error) {
    console.warn("Portfolio.json was not found");
    return null;
  }
}
