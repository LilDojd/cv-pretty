import { Data } from "@/types/data";
import { Mail } from "lucide-react";

const data: Data = {
  name: "",
  lastUpdatedAt: new Date(),
  status: {
    color: "active",
    label: "",
  },
  location: "",
  bio: "",
  summary: "",
  avatarUrl: "",
  languages: [],
  skills: [],
  education: [
    {
      school: "",
      degree: "",
      start: "",
      end: "",
    },
    {
      school: "",
      degree: "",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "",
      link: "",
      badges: [],
      title: "",
      start: "",
      end: "",
      description: "",
    },
    {
      company: "",
      link: "",
      badges: [],
      title: "",
      start: "",
      end: "",
      description: "",
    },
    {
      company: "",
      link: "",
      badges: [],
      title: "",
      start: "",
      end: "",
      description: "",
    },
  ],
  contacts: [
    {
      label: "",
      href: "",
      icon: Mail,
      toolbar: true,
    },
  ],
  projects: [
    {
      title: "",
      techStack: [],
      description: "",
      link: {
        label: "",
        href: "",
      },
    },
  ],
  references: [
    {
      name: "",
      title: "",
      contact: "",
      company: "",
      description: "",
    },
  ],
};

export default data;
