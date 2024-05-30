export const parseStatusString = (status: string): string => {
  switch (status) {
    case "reasoning":
      return "추론력";
    case "comprehension":
      return "이해력";
    case "logic":
      return "논리력";
    case "criticalThinking":
      return "사고력";
    case "vocabulary":
      return "어휘력";
    case "timeManagement":
      return "시간관리";
    default:
      return " ";
  }
};
