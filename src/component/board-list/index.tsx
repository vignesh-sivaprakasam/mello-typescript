import React from "react";
import { TopBar } from "../board-list/topbar";
import { SideBar } from "../sidebar";
import { BoardLists } from "./board-lists/index";
import { BoardListHeader } from "./board-list-header";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./index.module.css";

import { Board } from "../../models/board";

interface BoardListPageProps {
  isLoading: boolean;
  boards: Board[];
  onEdit: (id: string, name: string) => void;
  onDelete: (id: string) => void;
  onCreate: (name: string) => void;
}

export const BoardListPage: React.FC<BoardListPageProps> = ({
  isLoading,
  boards,
  onEdit,
  onDelete,
  onCreate,
}) => {
  return (
    <div className={styles.board_list_container}>
      <SideBar />
      <TopBar onCreate={onCreate} />
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
