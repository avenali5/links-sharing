import { create } from "zustand";

type Store = {
  profileInfo: {
    fullName: string;
    email: string;
    job: string;
    bio: string;
    color: string;
  };
  setProfileInfo: (newInfo: {
    fullName: string;
    email: string;
    job: string;
    bio: string;
    color: string;
  }) => void;
};

export const useProfileStore = create<Store>(set => ({
  profileInfo: {
    fullName: "",
    email: "",
    job: "",
    bio: "",
    color: "#633bfe",
  },
  setProfileInfo: updatedUser =>
    set(state => ({ profileInfo: { ...state.profileInfo, ...updatedUser } })),
}));
