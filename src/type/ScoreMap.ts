import { Score } from "./Score";

export interface ScoringMap {
  [key: number]: Partial<Score>;
}
