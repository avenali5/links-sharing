import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { HeaderStyle } from "./Header.style";
import Button from "../Button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSwiperStore } from "@/store/swiper";
import { slideNext, slidePrev } from "@/utils/hooks/useSwiperSlides";

type Props = {
  setPreview: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setPreview }: Props) => {
  const { selectedSlide, setSelectedSlide } = useSwiperStore();

  const handleProfileSlide = () => {
    slidePrev();
    setSelectedSlide("profile");
  };

  const handleLinkSlide = () => {
    slideNext();
    setSelectedSlide("links");
  };

  return (
    <HeaderStyle>
      <div className='logo'>
        <Image src='/assets/images/logo.svg' alt='' width={74} height={25} />
      </div>
      <nav>
        <Button
          type={selectedSlide === "profile" ? "ghost" : "transparent"}
          onClick={handleProfileSlide}
        >
          <Icon icon='mdi:account-circle-outline' />
          <span>Profile Details</span>
        </Button>
        <Button
          type={selectedSlide === "links" ? "ghost" : "transparent"}
          onClick={handleLinkSlide}
        >
          <Icon icon='mdi:link-variant' />
          <span>Links</span>
        </Button>
      </nav>
      <div className='preview'>
        <Button onClick={() => setPreview(true)} type='outline'>
          <Icon icon='mdi:eye-outline' />
          <span>Preview</span>
        </Button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
