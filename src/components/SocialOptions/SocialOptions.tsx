import { socialOptions } from "@/utils/constants";
import useClickOutside from "@/utils/hooks/useClickOutside";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { LegacyRef } from "react";
import { SocialOptionsStyle } from "./SocialOptions.style";
import { useLinksStore } from "@/store/links";
import { LinkElement } from "@/utils/types/types";

type Props = {
  link: LinkElement;
  setDropdown: (val: boolean) => void;
  dropdown: boolean;
  onChange: (val: LinkElement) => void;
};

const SocialOptions = ({ link, setDropdown, dropdown, onChange }: Props) => {
  const { links } = useLinksStore();

  const ref: LegacyRef<HTMLDivElement> = useClickOutside(() => {
    setDropdown(false);
  });

  return (
    <SocialOptionsStyle className='dropdown' ref={ref}>
      <div
        className='selected'
        onClick={() => {
          setDropdown(true);
        }}
      >
        <div className='option'>
          {link.platform ? (
            <div>
              <Icon icon={`fa6-brands:${link.platform.toLowerCase()}`} />
              <span>{link.platform}</span>
            </div>
          ) : (
            <span>Select an option</span>
          )}
          <Icon
            icon='mdi:chevron-down'
            style={{
              transform: socialOptions ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
        </div>
      </div>
      {dropdown && (
        <div className='options'>
          {socialOptions
            .filter(el => el.value !== link.platform)
            .filter(opt => !links.some(link => link.platform === opt.value))
            .map(opt => (
              <div
                key={opt.value}
                className='option'
                onClick={() => {
                  onChange({ ...link, platform: opt.value });
                  setDropdown(false);
                }}
              >
                <Icon icon={`fa6-brands:${opt.value.toLowerCase()}`} />
                <span>{opt.value}</span>
              </div>
            ))}
        </div>
      )}
    </SocialOptionsStyle>
  );
};

export default SocialOptions;
