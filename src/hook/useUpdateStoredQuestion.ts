import { storedQuestionAtom } from "@/recoil/stored-question-atom";
import { StoredQuestion } from "@/type/StoredQuestion";
import { useRecoilState } from "recoil";

export const useUpdateStoredQuestions = () => {
  const [storedQuestions, setStoredQuestions] =
    useRecoilState(storedQuestionAtom);

  const updateStoredQuestions = (newQuestion: StoredQuestion) => {
    setStoredQuestions((prevQuestions) => {
      const index = prevQuestions.findIndex(
        (question) => question.id === newQuestion.id
      );
      if (index !== -1) {
        // ID가 동일한 데이터가 존재하면 업데이트
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[index] = newQuestion;
        return updatedQuestions;
      } else {
        // 그렇지 않으면 배열의 맨 끝에 추가
        return [...prevQuestions, newQuestion];
      }
    });
  };

  return updateStoredQuestions;
};

export const useUpdateStoredQuestionsArray = () => {
  const [storedQuestions, setStoredQuestions] =
    useRecoilState(storedQuestionAtom);

  const updateStoredQuestionsArray = (newQuestions: StoredQuestion[]) => {
    setStoredQuestions((prevQuestions) => {
      const updatedQuestionsMap = new Map(
        prevQuestions.map((question) => [question.id, question])
      );

      newQuestions.forEach((newQuestion) => {
        updatedQuestionsMap.set(newQuestion.id, newQuestion);
      });

      return Array.from(updatedQuestionsMap.values());
    });
  };

  return updateStoredQuestionsArray;
};
