import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Graphic Design",
    description:
      "Creating visual concepts to communicate ideas that inspire, inform, and captivate.",
    rating: 5,
    icon: Icons.retro,
  },
  {
    name: "Video Editing",
    description:
      "Assembling recorded raw material into a finished product that's suitable for broadcasting.",
    rating: 5,
    icon: Icons.cyberpunk,
  },
  {
    name: "Adobe Premiere Pro",
    description:
      "Professional video editing software for creating stunning videos.",
    rating: 5,
    icon: Icons.media,
  },
  {
    name: "Adobe After Effects",
    description:
      "Creating motion graphics and visual effects for video.",
    rating: 4,
    icon: Icons.sparkles,
  },
  {
    name: "Adobe Photoshop",
    description:
      "Industry-standard software for photo editing and raster graphic design.",
    rating: 5,
    icon: Icons.image,
  },
  {
    name: "Adobe Illustrator",
    description:
      "Leading software for creating vector graphics, logos, and illustrations.",
    rating: 4,
    icon: Icons.pen,
  }
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
