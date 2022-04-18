import { CardType } from "./card";

export interface StackType {
  _id: string;
  name: string;
  color: string;
  cards: CardType[];
  createdAt: string;
  updatedAt: string;
}
