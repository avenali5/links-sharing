import { create } from "zustand";

type Store = {
  selectedSlide: "profile" | "links";
  setSelectedSlide: (newSlide: "profile" | "links") => void;
};

export const useSwiperStore = create<Store>(set => ({
  selectedSlide: "profile",
  setSelectedSlide: newSlide => set({ selectedSlide: newSlide }),
}));
