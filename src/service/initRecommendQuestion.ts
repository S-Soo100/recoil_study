import { getRecommendQuestion } from "@/apis/getRecommendQuestions";
import { IncorrectNote } from "@/type/IncorrectNote";
import { StoredQuestion } from "@/type/StoredQuestion";

type IProps = {
  incorrectNotes: IncorrectNote[];
  setStoredAtom: (val: StoredQuestion[]) => void;
};

export const initRecommendQuestion = async ({
  incorrectNotes,
  setStoredAtom,
}: IProps) => {
  const newAtom: StoredQuestion[] = [];

  for (const i of incorrectNotes) {
    const res: StoredQuestion[] | null = await getRecommendQuestion({
      questionType: i.questionType,
      solvedQuestions: `[${i.id}]`,
      length: 1,
      testType: 1,
    });
    if (res) {
      newAtom.push(res[0]);
    }
  }
  setStoredAtom(newAtom);
};
