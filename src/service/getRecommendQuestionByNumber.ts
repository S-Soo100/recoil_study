import { getRecommendQuestion } from "@/apis/getRecommendQuestions";
import { Question } from "@/type/Question";

type IProps = {
  type: number;
  currentQuestion: Question[];
  setAtom: (key: string, val: Question[]) => void;
};

const getAtomKey = (num: number): string => {
  switch (num) {
    case 0:
      return "recommend1Atom";
    case 1:
      return "recommend2Atom";
    case 2:
      return "recommend3Atom";
    case 3:
      return "recommend4Atom";
    default:
      return "recommend1Atom";
  }
};

export const setRecommendQuestionByNumber = async ({
  type,
  currentQuestion,
  setAtom,
}: IProps) => {
  const testTypeArr = [1, 2, 3, 4];
  console.log("get Recommend question");
  const newAtom: Question[] = [];

  for (const i of testTypeArr) {
    const res: Question[] | null = await getRecommendQuestion({
      questionType: type,
      solvedQuestions: `[${currentQuestion}]`,
      length: 1,
      testType: i,
    });
    console.log(`[${currentQuestion}]`);
    console.log(i + "번째 호출");
    if (res) {
      newAtom.push(res[0]);
    }
  }
  console.log(newAtom);
  setAtom(getAtomKey(type), newAtom);
};
