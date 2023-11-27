import React, { useEffect, useState } from "react";
import LinkElement from "./LinkElement";
import Button from "../Button/Button";
import { useLinksStore } from "@/store/links";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Icon } from "@iconify/react/dist/iconify.js";
import { socialOptions } from "@/utils/constants";

const Links = ({ setPreview }) => {
  const { links, setLinks } = useLinksStore();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const handleAddLink = () => {
    setLinks([
      ...links,
      {
        id: uuidv4(),
        platform: "",
        link: "",
      },
    ]);
  };

  const handleLinkChange = (updatedLink: any) => {
    const updatedLinks = links.map(link =>
      link.id === updatedLink.id ? updatedLink : link
    );
    setLinks(updatedLinks);
  };

  const handleLinkRemove = (updatedLink: any) => {
    const updatedLinks = links.filter(link => link.id !== updatedLink.id);
    setLinks(updatedLinks);
  };

  return (
    <div className='links-wrapper slide-content'>
      <h3>Customize your links</h3>
      <p>
        Add, edit and/or remove links below and then share all your profiles
        with the world!
      </p>
      <TransitionGroup component='div'>
        {links.map((link, i) => (
          <CSSTransition key={link.id} timeout={200} classNames='item'>
            <LinkElement
              order={i}
              link={link}
              onChange={handleLinkChange}
              onRemove={handleLinkRemove}
              setButtonDisabled={setButtonDisabled}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className='buttons'>
        {links.length < socialOptions.length && (
          <Button type='outline' onClick={handleAddLink}>
            <Icon icon='mdi:plus' />
            Add new link
          </Button>
        )}
        <Button
          type='filled'
          onClick={() => {
            setPreview(true);
          }}
          disabled={buttonDisabled}
        >
          <Icon icon='mdi:check' />
          Finish
        </Button>
      </div>
    </div>
  );
};

export default Links;
