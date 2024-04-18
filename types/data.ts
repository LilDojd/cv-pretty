import { IconType } from "@icons-pack/react-simple-icons";
import { Languages, LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export type Reference = {
  name: string;
  title: string;
  contact: string;
  company: string;
  description: string;
};

export type Work = {
  company: string;
  link?: string;
  badges: string[];
  logo?: string;
  title: string;
  start: string;
  end: string;
  description: string;
};

export type Contact = {
  label: string;
  href: string;
  icon: LucideIcon | IconType;
  toolbar?: boolean;
};

export type Link = {
  label: string;
  href: string;
  icon: LucideIcon | IconType;
};

export type Status = {
  color: "active" | "disabled" | "pending" | "blocked";
  label: string;
};

export type Languages = {
  type: "spoken" | "programming";
  name: string;
  proficiency: 0 | 1 | 2 | 3 | 4 | 5;
};

export type Skills = {
  type: string;
  stack: string[];
};

export type Data = {
  name: string;
  globalName?: string;
  lastUpdatedAt: Date;
  status: Status | null;
  location: string;
  locationLink?: string;
  bio: string;
  summary: string;
  avatarUrl: string;
  languages: Languages[];
  skills: Skills[];
  education: Education[];
  work: Work[];
  contacts: Contact[];
  projects: Project[];
  references: Reference[];
};
