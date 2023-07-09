export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};

type Icon = { href: string; active?: boolean; linkTitle: string };

export type SocialObjects = ({
  name: SocialMedia;
} & Icon)[];

export type SkillObjects = ({
  name: Skills;
} & Icon)[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SkillIcons = {
  [skill in Skills]: string;
};

export type SocialMedia = "Github" | "LinkedIn" | "Mail";

export type Skills =
  | "ReactJS"
  | "NodeJS"
  | "Astro"
  | "Sass"
  | "Typescript"
  | "NextJS"
  | "SolidJS"
  | "Solidity"
  | "GraphQL"
  | "Redux"
  | "Gatsby"
  | "Strapi";
