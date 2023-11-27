import React, { Dispatch, SetStateAction } from "react";
import Links from "../Links/Links";
import { FormsStyle } from "./Forms.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Profile from "../Profile/Profile";

type Props = {
  setPreview: Dispatch<SetStateAction<boolean>>;
};

const Forms = ({ setPreview }: Props) => {
  return (
    <FormsStyle className='forms-wrapper'>
      <Swiper
        allowTouchMove={false}
        preventClicks={false}
        preventClicksPropagation={false}
        // autoHeight
        // observeParents
        // observer
      >
        <SwiperSlide>
          <Profile />
        </SwiperSlide>
        <SwiperSlide>
          <Links setPreview={setPreview} />
        </SwiperSlide>
      </Swiper>
    </FormsStyle>
  );
};

export default Forms;
