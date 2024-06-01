import { Question } from "@/type/Question";
import { atom, selector } from "recoil";
export const answerRateAtom = atom<boolean[]>({
  key: "answerRateAtom",
  default: [],
});

export const answerRateSelector = selector({
  key: "answerRateSelector",
  get: ({ get }) => {
    const records = get(answerRateAtom);
    const correctCount = records.filter((record) => record === true).length;
    const incorrectCount = records.length - correctCount;
    const totalCount = records.length;
    const accuracy = totalCount === 0 ? 0 : (correctCount / totalCount) * 100;

    return {
      correctCount,
      incorrectCount,
      totalCount,
      accuracy,
    };
  },
});
