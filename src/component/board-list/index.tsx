import React from "react";
import { TopBar } from "../board-list/topbar";
import { SideBar } from "../board-list/sidebar";
import "./index.css";

export const BoardListComponent = () => {
  return (
    <div className="board_list_container">
      <SideBar />
      <TopBar />
      <div className="board_list_body">body</div>
    </div>
  );
};
