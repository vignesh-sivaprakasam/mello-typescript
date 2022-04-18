import * as React from "react";
import { useParams } from "react-router";
import { Board } from "../../component/board";
import { StackType } from "../../models/stack";

import { getBoardDetails } from "../../middleware/boards";
import { addStack, updateStack, deleteStack } from "../../middleware/stack";
import { addCard, updateCard } from "../../middleware/cards";

const { useEffect, useState } = React;

// const stacks: StackType[] = [
//   {
//     _id: "123",
//     name: "Vicky",
//     color: "blue",
//     createdAt: "abc",
//     updatedAt: "abc",
//   },
//   {
//     _id: "345",
//     name: "Vicky2",
//     color: "green",
//     createdAt: "abc",
//     updatedAt: "abc",
//   },
// ];

export const BoardContainer: React.FC = () => {
  const { boardID } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [stacks, setStacks] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      try {
        if (!boardID) {
          throw new Error("Error in Board ID");
        }
        const res = await getBoardDetails(boardID);
        console.log(res);
        setStacks(res.stacks);
      } catch {}
      setIsLoading(false);
    };
    fetch();
  }, [boardID]);

  if (!boardID) {
    return null;
  }

  const fetchBoardDetails = async (boardId: string) => {
    const res = await getBoardDetails(boardId);
    console.log(res);
    setStacks(res.stacks);
  };

  const onEditStack =
    (boardId: string) =>
    async (stackId: string, name: string, color: string) => {
      await updateStack(boardId, stackId, name, color);
      await fetchBoardDetails(boardId);
    };
  const onAddStack =
    (boardId: string) => async (name: string, color: string) => {
      console.log("boardID ", boardId, " name: ", name, " color: ", color);
      await addStack(boardId, name, color);
      await fetchBoardDetails(boardId);
    };

  const onDeleteStack = (boardId: string) => async (stackId: string) => {
    await deleteStack(boardId, stackId);
    await fetchBoardDetails(boardId);
  };

  const onAddCard =
    (boardId: string) =>
    (stackId: string) =>
    async (title: string, description: string) => {
      console.log(boardId, stackId, " Card: ", { title, description });
      await addCard(boardId, stackId, title, description);
      await fetchBoardDetails(boardId);
    };

  const onEditCard =
    (boardId: string) =>
    (stackId: string) =>
    async (cardId: string, title: string, description: string) => {
      console.log(boardId, stackId, " Card: ", { cardId, title, description });
      await updateCard(boardId, stackId, cardId, title, description);
      await fetchBoardDetails(boardId);
    };
  return (
    <>
      <Board
        isLoading={isLoading}
        stacks={stacks}
        boardID={boardID}
        onEditStack={onEditStack}
        onAddStack={onAddStack}
        onDeleteStack={onDeleteStack}
        onAddCard={onAddCard}
        onEditCard={onEditCard}
      />
    </>
  );
};
