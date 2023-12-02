import { useProfileStore } from "@/store/profile";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Button from "../Button/Button";
import { slideNext } from "@/utils/hooks/useSwiperSlides";
import { useSwiperStore } from "@/store/swiper";

const Profile = () => {
  const { profileInfo, setProfileInfo } = useProfileStore();
  const { setSelectedSlide } = useSwiperStore();

  const handleUpdateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileInfo({
      ...profileInfo,
      [name]: value,
    });
  };

  const handleNext = () => {
    slideNext();
    setSelectedSlide("links");
  };

  return (
    <div className='profile-wrapper slide-content'>
      <h3>Customize your profile</h3>
      <p>Add a bit of info to tell the world who you are!</p>
      <div className='profile-form'>
        <div className='input-group'>
          <label htmlFor='fullName'>Full name</label>
          <Icon icon='mdi:account' />
          <input
            type='text'
            className='input'
            name='fullName'
            placeholder='John Doe'
            value={profileInfo.fullName}
            onChange={handleUpdateUser}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='job'>Job</label>
          <Icon icon='mdi:briefcase' />
          <input
            type='text'
            className='input'
            name='job'
            placeholder='Software Developer'
            value={profileInfo.job}
            onChange={handleUpdateUser}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <Icon icon='mdi:envelope' />
          <input
            type='email'
            className='input'
            name='email'
            placeholder='johndoe@mail.com'
            value={profileInfo.email}
            onChange={handleUpdateUser}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='color'>Color</label>
          <input
            type='color'
            name='color'
            placeholder='Software Developer'
            value={profileInfo.color}
            onChange={handleUpdateUser}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='bio'>Bio</label>
          <Icon icon='mdi:leaf' />
          <input
            type='text'
            className='input'
            name='bio'
            placeholder='A brief text about you'
            maxLength={75}
            value={profileInfo.bio}
            onChange={handleUpdateUser}
          />
        </div>
      </div>
      <div className='buttons'>
        <Button type='filled' onClick={handleNext}>
          Next
          <Icon icon='mdi:chevron-right' />
        </Button>
      </div>
    </div>
  );
};

export default Profile;
