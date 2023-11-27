import React, { useEffect, useState } from "react";
import Preview from "../Preview/Preview";
import { FinalResultStyle } from "./FinalResult.style";
import { useProfileStore } from "@/store/profile";
import { useLinksStore } from "@/store/links";
import { v4 as uuidv4 } from "uuid";

type Props = {
  searchParams: any;
};

const FinalResult = ({ searchParams }: Props) => {
  const { setProfileInfo } = useProfileStore();
  const { setLinks } = useLinksStore();

  const {
    fullName,
    email,
    job,
    bio,
    color,
    github,
    linkedin,
    behance,
    youtube,
    twitch,
    twitter,
    dribbble,
  } = searchParams;

  let links: any = [];

  links = [
    ...links,
    ...(github
      ? [
          {
            id: uuidv4(),
            platform: "Github",
            link: github,
          },
        ]
      : ""),
    ...(linkedin
      ? [
          {
            id: uuidv4(),
            platform: "Linkedin",
            link: linkedin,
          },
        ]
      : ""),
    ...(behance
      ? [
          {
            id: uuidv4(),
            platform: "Behance",
            link: behance,
          },
        ]
      : ""),
    ...(dribbble
      ? [
          {
            id: uuidv4(),
            platform: "Dribbble",
            link: dribbble,
          },
        ]
      : ""),
    ...(twitter
      ? [
          {
            id: uuidv4(),
            platform: "Twitter",
            link: twitter,
          },
        ]
      : ""),
    ...(youtube
      ? [
          {
            id: uuidv4(),
            platform: "Youtube",
            link: youtube,
          },
        ]
      : ""),
    ...(twitch
      ? [
          {
            id: uuidv4(),
            platform: "Twitch",
            link: twitch,
          },
        ]
      : ""),
  ];

  useEffect(() => {
    // @ts-ignore
    setProfileInfo({
      fullName,
      bio,
      email,
      job,
      color: `#${color}`,
    });
    setLinks(links);
  }, []);

  return (
    <FinalResultStyle>
      <Preview preview />
    </FinalResultStyle>
  );
};

export default FinalResult;
