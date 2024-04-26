export const demo1: Question = {
  id: 100,
  question: "다음 글의 목적으로 가장 적절한 것은?",
  questionNumber: 18,
  article:
    // "To whom it may concern,I am writing to inform you of an ongoing noise issue that\nI am experiencing. My apartment faces the basketball \ncourts of the community center. While I fully support the\n community center’s services, I am constantly being disrupted\n by individuals playing basketball late at night. Many\nnights, I struggle to fall asleep because I can hear people\n bouncing balls and shouting on the basketball courts well \nafter 11 p.m.. Could you restrict the time the basketball \ncourt is open to before 9 p.m.? I’m sure I’m not the only\nperson in the neighborhood that is affected by this noise \nissue. I appreciate your assistance.\nSincerely, \nIan Baldwin\n",
    `To whom it may concern,I am writing to inform you of an ongoing noise issue that
I am experiencing. My apartment faces the basketball 
courts of the community center. While I fully support the
community center’s services, I am constantly being disrupted
by individuals playing basketball late at night. Many
nights, I struggle to fall asleep because I can hear people
bouncing balls and shouting on the basketball courts well 
after 11 p.m.. Could you restrict the time the basketball 
court is open to before 9 p.m.? I’m sure I’m not the only
person in the neighborhood that is affected by this noise 
issue. I appreciate your assistance.
Sincerely,
Ian Baldwin`,
  options: [
    "체육관의 바닥 교체 공사를 요구하려고",
    "농구 코트의 운영 시간 제한을 요청하려고",
    "문화 센터 시설의 대관 날짜를 변경하려고",
    "건강 증진 프로그램 신청 방법을 문의하려고",
    "지역 내 체육 시설의 증설 가능 여부를 확인하려고",
  ],
  answer: 2,
  questionType: "글의 목적 찾기",
  solution: `이 편지의 목적은 농구 코트의 운영 시간을 제한하기 위해 요청하는 것입니다. 
편지 작성자는 밤 늦게까지 지속되는 농구 소음으로 인해 잠을 잘 수 없다고 설명하며, 
농구장 운영 시간을 저녁 9시 이전으로 제한해 달라고 요청하고 있습니다. 
따라서 가장 적절한 목적은 ② '농구 코트의 운영 시간 제한을 요청하려고' 입니다.`,
  keyWords: [
    { eng: "restrict", kor: "제한하다" },
    { eng: "community center", kor: "커뮤니티 센터" },
    { eng: "issue", kor: "문제" },
  ],
  difficulty: null,
  incorrectRate: null,
};
