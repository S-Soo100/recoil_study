import { getStoredQuestion } from "@/apis/getStoredQuestion";
import { StoredQuestion } from "@/type/StoredQuestion";

type IProps = {
  setStoredAtom: (val: StoredQuestion[]) => void;
};

export const initMainQuestion = async ({ setStoredAtom }: IProps) => {
  // const ids = [1, 2, 3, 4];
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("init main question");
  const newAtom: StoredQuestion[] = [];

  for (const id of ids) {
    const res: StoredQuestion[] | null = await getStoredQuestion({
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
  setStoredAtom(newAtom);
};
