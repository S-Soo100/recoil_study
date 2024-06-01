import { atom } from "recoil";
export const questionIdAtom = atom<number[]>({
  key: "questionIdAtom",
  default: [],
});
