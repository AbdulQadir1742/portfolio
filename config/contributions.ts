export interface contributionsInterface {
  title: string;
  description: string;
  platform: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    title: "Community Design Resource Pack",
    description:
      "Created and shared a free pack of graphic design assets (icons, textures, templates) for the design community.",
    platform: "Behance",
    link: "https://www.behance.net/saudahmed",
  },
  {
    title: "Video Editing Tutorial Series",
    description:
      "Produced a series of beginner-friendly video editing tutorials for a popular online learning platform.",
    platform: "YouTube",
    link: "https://www.youtube.com/saudahmed",
  },
  {
    title: "Open-Source Branding Project",
    description:
      "Contributed branding guidelines and logo variations to an open-source non-profit initiative.",
    platform: "GitHub",
    link: "https://github.com/saudahmed",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
