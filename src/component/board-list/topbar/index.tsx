import React from "react";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import boardListStyles from "../index.module.css";
import styles from "./index.module.css";

console.log(styles);
export const TopBar: React.FC = () => {
  return (
    <div className={boardListStyles.board_list_top_bar}>
      <div className={styles.container}>
        <SearchIcon className={styles.icon} />
        <InputBase placeholder="Search" className={styles.input} />
      </div>
      <Button variant="contained">Create Board</Button>
    </div>
  );
};
