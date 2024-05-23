import { Question } from "./Question";

export interface StoredQuestion extends Question {
  selectedAnswer: number;
  spentTimeSec: number;
  isCorrected: boolean;
}
