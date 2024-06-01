import { getAllQuestion } from "@/apis/getAllQuestions";
import { Question } from "@/type/Question";

type IProps = {
  setter: (val: Question[]) => void;
};

export const initAllQuestion = async ({ setter }: IProps) => {
  console.log("init All question");

  const res: Question[] | null = await getAllQuestion();
  if (res) {
    setter(res);
  } else {
    throw new Error("Fetch All Question ERROR");
  }
};
