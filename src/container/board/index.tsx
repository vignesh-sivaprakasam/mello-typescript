import * as React from "react";
import { Board } from "../../component/board";
import { StackType } from "../../models/stack";

const stacks: StackType[] = [
  {
    _id: "123",
    name: "Vicky",
    color: "blue",
    createdAt: "abc",
    updatedAt: "abc",
  },
  {
    _id: "345",
    name: "Vicky2",
    color: "green",
    createdAt: "abc",
    updatedAt: "abc",
  },
];

export const BoardContainer: React.FC = () => {
  console.log("container", stacks);
  return (
    <>
      <Board stacks={stacks} />
    </>
  );
};
