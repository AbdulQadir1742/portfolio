import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@saudahmed",
    icon: Icons.gitHub,
    link: "https://github.com/namanbarkiya",
  },
  {
    name: "LinkedIn",
    username: "Naman Barkiya",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/namanbarkiya",
  },
  {
    name: "Twitter",
    username: "@saudahmed",
    icon: Icons.twitter,
    link: "https://twitter.com/saudahmed",
  },
  {
    name: "Gmail",
    username: "naman.barkiya02",
    icon: Icons.gmail,
    link: "mailto:naman.barkiya02@gmail.com",
  },
];
