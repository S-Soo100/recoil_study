import { Question } from "@/type/Question";
import { atom } from "recoil";
export const allQuestionAtom = atom<Question[]>({
  key: "allQuestionAtom",
  default: [],
});
