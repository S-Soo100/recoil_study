import { Question } from "@/type/Question";
import { atom } from "recoil";
export const questionAtom = atom<Question[]>({
  key: "questionAtom",
  default: [],
});
