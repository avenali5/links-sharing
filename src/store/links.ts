import { LinkElement } from "@/utils/types/types";
import { create } from "zustand";

type Store = {
  links: LinkElement[];
  setLinks: (newLinks: LinkElement[]) => void;
};

export const useLinksStore = create<Store>(set => ({
  links: [],
  setLinks: newLinks => set({ links: newLinks }),
}));
