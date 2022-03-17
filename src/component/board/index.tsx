import * as React from "react";
import { Stack as StackComponent } from "@mui/material";
import { SideBar } from "../sidebar";
import { TopBar } from "./topbar";
import { Stack } from "./stack";

import styles from "./index.module.css";
import { StackType } from "../../models/stack";

export interface BoardProps {
  stacks: StackType[];
}

export const Board: React.FC<BoardProps> = ({ stacks }) => {
  console.log("stack: ", stacks);
  return (
    <div className={styles.board_container}>
      <TopBar />
      <SideBar />
      <StackComponent className={styles.board_body} direction="row">
        {stacks.map(({ _id, name, color }) => (
          <Stack
            key={_id}
            id={_id}
            name={name}
            color={color}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        ))}
      </StackComponent>
    </div>
  );
};
