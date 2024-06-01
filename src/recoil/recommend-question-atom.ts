import { StoredQuestion } from "@/type/StoredQuestion";
import { atom } from "recoil";

export const recommendQuestionAtom = atom<StoredQuestion[]>({
  key: "recommendQuestionAtom",
  default: [],
});
