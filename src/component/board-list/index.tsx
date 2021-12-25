import React from "react";
import { TopBar } from "../board-list/topbar";
import { SideBar } from "../board-list/sidebar";
import styles from "./index.module.css";
console.log("st:", styles);
export const BoardListComponent = () => {
  return (
    <div className={styles.board_list_container}>
      <SideBar />
      <TopBar />
      <div className={styles.board_list_body}>body</div>
    </div>
  );
};
