import React from "react";
import { BuilderStyle } from "./Builder.style";
import { useLinksStore } from "@/store/links";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useProfileStore } from "@/store/profile";
import EmptyState from "../EmptyState/EmptyState";

const Builder = () => {
  const { links } = useLinksStore();
  const { profileInfo } = useProfileStore();

  return (
    <BuilderStyle className='builder-wrapper'>
      {links.length > 0 ||
      profileInfo.fullName ||
      profileInfo.job ||
      profileInfo.bio ||
      profileInfo.email ? (
        <div className='outer-wrapper'>
          <div className='wrapper'>
            <div className='info'>
              <h3>{profileInfo.fullName}</h3>
              <h4>{profileInfo.job}</h4>
              <p>{profileInfo.email}</p>
              <p>{profileInfo.bio}</p>
            </div>
            <div className='links'>
              {links
                // .filter(el => el.link !== "" && el.platform !== "")
                .map(link => (
                  <a
                    href={link.link}
                    rel='noopener noreferrer'
                    target='_blank'
                    className={`link ${link.platform.toLowerCase()}`}
                    key={link.id}
                  >
                    <Icon icon={`fa6-brands:${link.platform.toLowerCase()}`} />
                    <span>{link.platform}</span>
                    <Icon icon='mdi:chevron-right' className='arrow' />
                  </a>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='outer-wrapper'>
          <div className='wrapper'>
            <EmptyState />
          </div>
        </div>
      )}
    </BuilderStyle>
  );
};

export default Builder;
