import React, { useEffect, useState } from "react";
import Preview from "../Preview/Preview";
import { FinalResultStyle } from "./FinalResult.style";
import { useProfileStore } from "@/store/profile";
import { useLinksStore } from "@/store/links";
import { v4 as uuidv4 } from "uuid";
import { LinkElement, SearchParams } from "@/utils/types/types";

type Props = {
  searchParams: SearchParams;
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
    Github,
    Linkedin,
    Behance,
    Youtube,
    Twitch,
    Twitter,
    Dribbble,
  } = searchParams;

  let links: LinkElement[] | any = [];

  links = [
    ...links,
    ...(Github
      ? [
          {
            id: uuidv4(),
            platform: "Github",
            link: Github,
          },
        ]
      : ""),
    ...(Linkedin
      ? [
          {
            id: uuidv4(),
            platform: "Linkedin",
            link: Linkedin,
          },
        ]
      : ""),
    ...(Behance
      ? [
          {
            id: uuidv4(),
            platform: "Behance",
            link: Behance,
          },
        ]
      : ""),
    ...(Dribbble
      ? [
          {
            id: uuidv4(),
            platform: "Dribbble",
            link: Dribbble,
          },
        ]
      : ""),
    ...(Twitter
      ? [
          {
            id: uuidv4(),
            platform: "Twitter",
            link: Twitter,
          },
        ]
      : ""),
    ...(Youtube
      ? [
          {
            id: uuidv4(),
            platform: "Youtube",
            link: Youtube,
          },
        ]
      : ""),
    ...(Twitch
      ? [
          {
            id: uuidv4(),
            platform: "Twitch",
            link: Twitch,
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
