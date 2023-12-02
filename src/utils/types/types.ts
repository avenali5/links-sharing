export type ProfileInfo = {
  fullName: string;
  email: string;
  job: string;
  color: string;
  bio: string;
  [key: string]: string;
};

export type LinksPlatforms = {
  Github: string;
  Linkedin: string;
  Behance: string;
  Youtube: string;
  Twitch: string;
  Dribbble: string;
  Twitter: string;
};

export type SearchParams = ProfileInfo & LinksPlatforms;

export type LinkElement = {
  id: string;
  platform: string;
  link: string;
};
