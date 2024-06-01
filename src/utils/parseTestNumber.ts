export const parseTestNumber = (testNumber: string): string => {
  const stringArr = [];

  switch (testNumber[0]) {
    case "1":
      stringArr.push("[고1]");
      break;
    case "2":
      stringArr.push("[고2]");
      break;
    case "3":
      stringArr.push("[고3]");
      if (testNumber[2] === "1" && testNumber[3] === "1") {
        return `${testNumber[2]}${testNumber[3]}년도 수능`;
      }
      break;
    case "4":
      return "AI생성 문제";
    default:
      stringArr.push("[고3]");
      break;
  }

  stringArr.push(
    `${testNumber[2]}${testNumber[3]}년도 ${testNumber[4]}${testNumber[5]}월 모의고사`
  );

  return stringArr.join(" ");
};
