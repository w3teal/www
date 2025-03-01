import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://w3teal.vercel.app/", // replace this with your deployed domain
  author: "Muhammad Danish Naufal",
  desc: "W3Teal's official blog website.",
  title: "W3Teal",
  ogImage: "opengraph.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/w3teal/www/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS: SocialObjects = [
  {
    name: "Keyoxide",
    href: "https://keyoxide.org/aspe:keyoxide.org:YM7J2J5UIVYRWSHRSOTYFYJ2HQ",
    linkTitle: ` ${SITE.title} on Keyoxide`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/w3teal",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Codeberg",
    href: "https://codeberg.org/w3teal",
    linkTitle: ` ${SITE.title} on Codeberg`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ligmatv/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://fosstodon.org/@w3teal",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
