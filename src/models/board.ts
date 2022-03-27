import { StackType } from "./stack";

export interface Board {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  stacks?: StackType;
}
