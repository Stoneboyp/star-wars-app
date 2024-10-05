import { create } from "zustand";

interface SearchState {
  search: string;
  setSearch: (query: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  search: "",
  setSearch: (query: string) => set({ search: query }),
}));
