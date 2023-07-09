import type { Site, SkillObjects, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://dazp.xyz/",
  author: "Diogo Parente",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "dazp",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/diogoparente",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https:/linkedin.com/in/diogoparentedev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hello@diogocodes.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];

export const SKILLS: SkillObjects = [
  {
    name: "ReactJS",
    href: "https://react.dev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "NodeJS",
    href: "https:/linkedin.com/in/diogoparentedev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Astro",
    href: "https:/linkedin.com/in/diogoparentedev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Typescript",
    href: "https:/linkedin.com/in/diogoparentedev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Sass",
    href: "https:/linkedin.com/in/diogoparentedev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Solidity",
    href: "https:/linkedin.com/in/diogoparentedev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "GraphQL",
    href: "https:/linkedin.com/in/diogoparentedev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Redux",
    href: "https:/linkedin.com/in/diogoparentedev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Gatsby",
    href: "https:/linkedin.com/in/diogoparentedev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Strapi",
    href: "https:/linkedin.com/in/diogoparentedev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
];
