import { IncorrectNote } from "@/type/IncorrectNote";
import { StoredQuestion } from "@/type/StoredQuestion";
import { atom, selector } from "recoil";
export const storedQuestionAtom = atom<StoredQuestion[]>({
  key: "storedQuestionAtom",
  default: [],
});

export const storedQuestionSelector = selector({
  key: "storedQuestionSelector",
  get: ({ get }) => {
    const records = get(storedQuestionAtom);
    const correctCount = records.filter(
      (record) => record.isCorrected === true
    ).length;
    const incorrectCount = records.length - correctCount;
    const totalCount = records.length;
    const accuracy = totalCount === 0 ? 0 : (correctCount / totalCount) * 100;
    const incorrectQuestions = records.filter((e) => e.isCorrected === false);
    const totalTimeSec = records.reduce(
      (acc, curr, idx) => acc + curr.spentTimeSec,
      0
    );
    const incorrectNotes = records.filter((e) => e.isCorrected === false);

    return {
      correctCount,
      incorrectCount,
      totalCount,
      accuracy,
      incorrectQuestions,
      totalTimeSec,
      incorrectNotes,
    };
  },
});
