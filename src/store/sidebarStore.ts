import { create } from "zustand";

interface Store {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const useSidebarStore = create<Store>()((set) => ({
  isOpen: true,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
