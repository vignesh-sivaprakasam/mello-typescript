import * as React from "react";
import { Stack as StackComponent, Box, CircularProgress } from "@mui/material";
import { SideBar } from "../sidebar";
import { TopBar } from "./topbar";
import { Stack } from "./stack";

import styles from "./index.module.css";
import { StackType } from "../../models/stack";

export interface BoardProps {
  isLoading: boolean;
  boardID: string;
  stacks: StackType[];
  onEdit: (
    boardID: string
  ) => (stackID: string, name: string, color: string) => void;
}

export const Board: React.FC<BoardProps> = ({
  isLoading,
  boardID,
  stacks,
  onEdit,
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
          {stacks.map(({ _id, name, color }) => (
            <Stack
              key={_id}
              id={_id}
              name={name}
              color={color}
              onEdit={onEdit(boardID)}
              onDelete={() => {}}
            />
          ))}
        </StackComponent>
      )}
    </div>
  );
};
