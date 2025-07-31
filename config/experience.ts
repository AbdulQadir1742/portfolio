import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "brand-identity",
    companyName: "Creative Solutions Inc.",
    type: "Professional",
    category: ["Graphic Design", "Branding"],
    shortDescription: "Developed a complete brand identity for a leading tech startup, including logo, color palette, and marketing materials.",
    techStack: [
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    startDate: new Date("2022-01-15"),
    endDate: new Date("2022-05-30"),
    companyLogoImg: "/experience/builtdesign/logo.png",
    pagesInfoArr: [
      {
        title: "Logo Design",
        description:
          "Created a modern and memorable logo that reflects the company's values and mission.",
        imgArr: [
          "/experience/apex/logo.png",
        ],
      },
      {
        title: "Marketing Materials",
        description:
          "Designed a range of marketing materials, including business cards, brochures, and social media graphics.",
        imgArr: [
          "/experience/card/card_1.webp",
          "/experience/card/card_2.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As a graphic designer for Creative Solutions Inc., I was tasked with developing a comprehensive brand identity for a promising tech startup. My responsibilities included conceptualizing and designing a new logo, selecting a color palette, and creating a variety of marketing materials.",
        "I worked closely with the client to understand their vision and target audience. This collaborative approach ensured that the final brand identity was not only visually appealing but also effectively communicated the company's message.",
        "The new branding was successfully launched and received positive feedback from both the client and their customers. It played a crucial role in establishing a strong and consistent brand presence for the startup.",
      ],
      bullets: [
        "Developed a complete brand identity for a leading tech startup.",
        "Created a modern and memorable logo, color palette, and marketing materials.",
        "Collaborated closely with the client to ensure the branding aligned with their vision.",
        "Successfully launched the new branding, resulting in a strong and consistent brand presence.",
      ],
    },
  },
  {
    id: "promo-video",
    companyName: "E-commerce Giant",
    type: "Professional",
    category: ["Video Editing", "Motion Graphics"],
    shortDescription: "Edited and produced a series of high-impact promotional videos for a major e-commerce platform, resulting in a 20% increase in user engagement.",
    techStack: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
    ],
    startDate: new Date("2022-08-01"),
    endDate: new Date("2022-11-15"),
    companyLogoImg: "/experience/superquotes/logo.png",
    pagesInfoArr: [
      {
        title: "Video Stills",
        description:
          "A collection of stills from the promotional video campaign.",
        imgArr: [
          "/experience/builtdesign-blogs/blog_1.webp",
          "/experience/builtdesign-blogs/blog_2.webp",
          "/experience/builtdesign-blogs/blog_3.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I had the exciting opportunity to work with a major e-commerce platform to create a series of promotional videos. My role involved editing raw footage, adding motion graphics, and producing the final videos for a large-scale marketing campaign.",
        "The goal was to create engaging and high-impact videos that would capture the attention of the target audience and drive user engagement. I used Adobe Premiere Pro for video editing and Adobe After Effects for creating custom motion graphics and visual effects.",
        "The promotional video campaign was a huge success, resulting in a 20% increase in user engagement and a significant boost in brand visibility. This project allowed me to showcase my skills in video editing and motion graphics on a large scale.",
      ],
      bullets: [
        "Edited and produced a series of high-impact promotional videos for a major e-commerce platform.",
        "Created custom motion graphics and visual effects using Adobe After Effects.",
        "The campaign resulted in a 20% increase in user engagement and a significant boost in brand visibility.",
        "Showcased my skills in video editing and motion graphics on a large-scale project.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);

