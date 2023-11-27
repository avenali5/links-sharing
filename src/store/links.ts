import { create } from "zustand";

type Store = {
  links: any[];
  setLinks: (newLinks: any[]) => void;
};

export const useLinksStore = create<Store>(set => ({
  links: [],
  setLinks: newLinks => set({ links: newLinks }),
}));
