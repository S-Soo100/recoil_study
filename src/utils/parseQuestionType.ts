export const parseQuestionType = (questionType: string): string => {
  switch (questionType) {
    case "1":
      return "글의 목적 추론";
    case "2":
      return "주인공의 심경 변화 추론";
    case "3":
      return "필자의 주장 파악";
    case "4":
      return "함축 의미 추론";
    case "5":
      return "글의 요지 추론";
    case "6":
      return "글의 주제 추론";
    case "7":
      return "글의 제목 추론";
    case "8":
      return "세부 내용 파악";
    case "9":
      return "글 순서 파악";
    case "10":
      return "문장 삽입";
    default:
      return "글의 목적 추론";
  }
};
