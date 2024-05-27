import { getQuestion } from "@/apis/getQuestion";
import { Question } from "@/type/Question";

type IProps = {
  setAtom: (val: Question[]) => void;
};

export const initMainQuestion = async ({ setAtom }: IProps) => {
  // const ids = [1, 2, 3, 4];
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("init main question");
  const newAtom: Question[] = [];

  for (const id of ids) {
    const res: Question[] | null = await getQuestion({
      questionType: id,
      solvedQuestions: `[]`,
      length: 1,
      testType: 1,
    });
    console.log(id + "번째 호출");
    if (res) {
      newAtom.push(res[0]);
    }
  }
  // ids.forEach(async (id) => {
  //   const res = await getQuestion({
  //     questionType: id,
  //     solvedQuestions: `[]`,
  //     length: 1,
  //     testType: 1,
  //   });
  //   console.log(id + "번쨰 호출");
  //   setAtom(res as Question[]);
  // });
  console.log(newAtom);
  setAtom(newAtom);
};
