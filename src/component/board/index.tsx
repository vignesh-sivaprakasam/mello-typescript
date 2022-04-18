import * as React from "react";
import { Stack as StackComponent, Box, CircularProgress } from "@mui/material";
import { SideBar } from "../sidebar";
import { TopBar } from "./topbar";
import { Stack } from "./stack";
import { AddStack } from "./stack/add-stack";

import styles from "./index.module.css";
import { StackType } from "../../models/stack";

export interface BoardProps {
  isLoading: boolean;
  boardID: string;
  stacks: StackType[];
  onEditStack: (
    boardID: string
  ) => (stackID: string, name: string, color: string) => void;
  onAddStack: (boardID: string) => (name: string, color: string) => void;
  onDeleteStack: (boardID: string) => (stackId: string) => void;
  onAddCard: (
    boardID: string
  ) => (stackId: string) => (title: string, description: string) => void;
  onEditCard: (
    boardID: string
  ) => (
    stackId: string
  ) => (cardId: string, title: string, description: string) => void;
}

export const Board: React.FC<BoardProps> = ({
  isLoading,
  boardID,
  stacks,
  onAddStack,
  onEditStack,
  onDeleteStack,
  onAddCard,
  onEditCard,
}) => {
  console.log("stack: ", stacks);
  return (
    <div className={styles.board_container}>
      <TopBar />
      <SideBar />
      {isLoading ? (
        <Box
          className={styles.board_body}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        <StackComponent className={styles.board_body} direction="row">
          {stacks.map(({ _id, name, color, cards }) => (
            <Stack
              key={_id}
              id={_id}
              name={name}
              color={color}
              cards={cards}
              onEdit={onEditStack(boardID)}
              onDelete={onDeleteStack(boardID)}
              onAddCard={onAddCard(boardID)}
              onEditCard={onEditCard(boardID)}
            />
          ))}
          <AddStack onCreate={onAddStack(boardID)} />
        </StackComponent>
      )}
    </div>
  );
};
