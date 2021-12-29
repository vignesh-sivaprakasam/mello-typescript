import React from "react";
import { TopBar } from "../board-list/topbar";
import { SideBar } from "../board-list/sidebar";
import { BoardLists } from "./board-lists/index";
import { BoardListHeader } from "./board-list-header";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./index.module.css";

import { Board } from "../../models/board";
const boardLists = [
  { id: "123", name: "vicky", dateCreated: "12/11/2000" },
  { id: "234", name: "vignesh", dateCreated: "12/11/2000" },
];
interface BoardListPageProps {
  isLoading: boolean;
  boards: Board[];
  onEdit: (id: string, name: string) => void;
  onDelete: (id: string) => void;
}

export const BoardListPage: React.FC<BoardListPageProps> = ({
  isLoading,
  boards,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={styles.board_list_container}>
      <SideBar />
      <TopBar />
      <div className={styles.board_list_body}>
        <BoardListHeader />
        {isLoading ? (
          <Box textAlign="center">
            <CircularProgress />
          </Box>
        ) : (
          <BoardLists items={boards} onEdit={onEdit} onDelete={onDelete} />
        )}
      </div>
    </div>
  );
};
