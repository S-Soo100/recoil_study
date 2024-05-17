import { Question } from "@/type/Question";
import { atom } from "recoil";
export const recommend1Atom = atom<Question[]>({
  key: "recommend1Atom",
  default: [],
});
export const recommend2Atom = atom<Question[]>({
  key: "recommend2Atom",
  default: [],
});
export const recommend3Atom = atom<Question[]>({
  key: "recommend3Atom",
  default: [],
});
export const recommend4Atom = atom<Question[]>({
  key: "recommend4Atom",
  default: [],
});
