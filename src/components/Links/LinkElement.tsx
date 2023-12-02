import { socialOptions, urlRegex } from "@/utils/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";

import SocialOptions from "../SocialOptions/SocialOptions";
import { LinkElement } from "@/utils/types/types";

type Props = {
  link: LinkElement;
  onChange: (val: LinkElement) => void;
  onRemove: (val: LinkElement) => void;
  order: number;
  setButtonDisabled: (val: boolean) => void;
};

const LinkElement = ({
  link,
  onChange,
  onRemove,
  order,
  setButtonDisabled,
}: Props) => {
  const [error, setError] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...link, link: e.target.value });
  };

  const removeLink = () => {
    onRemove(link);
  };

  useEffect(() => {
    if (link.platform) {
      if (!link.link?.match(urlRegex)) {
        setError("The input must contain a valid url.");
        setButtonDisabled(true);
      } else if (!link.link.includes(link.platform.toLowerCase())) {
        setError(`The input must contain a valid ${link.platform} url.`);
        setButtonDisabled(true);
      } else {
        setError("");
        setButtonDisabled(false);
      }
    }
  }, [link]);

  return (
    <div className='link-element-container'>
      <div className='top'>
        <h4>Link #{order + 1}</h4>
        <button onClick={removeLink}>Remove</button>
      </div>
      <div className='platform input-group'>
        <label htmlFor='platform'>Platform</label>
        <SocialOptions
          dropdown={dropdown}
          link={link}
          onChange={onChange}
          setDropdown={setDropdown}
        />
      </div>
      <div className='link-input input-group'>
        <label htmlFor='platform'>Link</label>
        <Icon icon='mdi:link-variant' />
        <input
          type='text'
          className={`${error ? "error-input" : ""} input`}
          placeholder={`https://${link.platform.toLowerCase()}...`}
          onChange={handleInputChange}
          value={link.link}
        />
        {error && <span className='error'>{error}</span>}
      </div>
    </div>
  );
};

export default LinkElement;
