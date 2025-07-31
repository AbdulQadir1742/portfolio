import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "freelance",
    position: "Freelance Graphic Designer & Video Editor",
    company: "Self-Employed",
    location: "Remote",
    startDate: new Date("2021-01-01"),
    endDate: "Present",
    description: [
      "Providing high-quality graphic design and video editing services to a diverse range of clients.",
      "Specializing in brand identity design, marketing materials, and promotional video production.",
    ],
    achievements: [
      "Successfully completed over 50 projects for clients worldwide.",
      "Helped clients achieve their marketing goals through compelling visual content.",
      "Built a strong reputation for creativity, quality, and professionalism.",
    ],
    skills: ["Graphic Design", "Video Editing", "Adobe Creative Suite"],
  },
];
