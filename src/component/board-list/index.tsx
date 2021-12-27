import React from "react";
import { TopBar } from "../board-list/topbar";
import { SideBar } from "../board-list/sidebar";
import { BoardLists } from "./board-lists/index";
import { BoardListHeader } from "./board-list-header";
import styles from "./index.module.css";
console.log("st:", styles);
const boardLists = [
  { id: "123", name: "vicky", dateCreated: "12/11/2000" },
  { id: "234", name: "vignesh", dateCreated: "12/11/2000" },
];
export const BoardListPage = () => {
  const onEdit = (id: string, name: string) => {
    console.log("edit id:", id);
  };
  const onDelete = (id: string) => {
    console.log("delete id:", id);
  };
  return (
    <div className={styles.board_list_container}>
      <SideBar />
      <TopBar />
      <div className={styles.board_list_body}>
        <BoardListHeader />
        <BoardLists items={boardLists} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};
