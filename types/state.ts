import { Person } from "~/types";

export interface RootState {
  people: Person[];
  matchedPeople: Person[];
  userAgent: string;
  userId: string;
}