import React, { useState } from "react";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import { CreateBoardModal } from "../create-board";

import boardListStyles from "../index.module.css";
import styles from "./index.module.css";

interface TopBarProps {
  onCreate: (_: string) => void;
}
export const TopBar: React.FC<TopBarProps> = ({ onCreate }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={boardListStyles.board_list_top_bar}>
      <div className={styles.container}>
        <SearchIcon className={styles.icon} />
        <InputBase placeholder="Search" className={styles.input} />
      </div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Create Board
      </Button>
      <CreateBoardModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        onCreate={(name: string) => {
          onCreate(name);
          setOpen(false);
        }}
      />
    </div>
  );
};
