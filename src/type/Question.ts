interface Question {
  // DB내 id
  id: number;
  // 문제
  question: string;
  // 문제 번호
  questionNumber: number;
  // 문제 지문
  article: string;
  // 문제 보기
  options: string[];
  // 답
  answer: number;
  // 문제 유형
  questionType: string; //string으로 해야될지 고민
  // 문제 풀이
  solution: string;
  // 핵심 영단어
  keyWords: { eng: string; kor: string }[];
  // 난이도
  difficulty: number | null;
  // 오답률
  incorrectRate: number | null;
  // 언제 문제인지
  // testDate??? : string | null;
}
