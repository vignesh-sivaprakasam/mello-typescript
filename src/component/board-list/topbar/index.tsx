import React from "react";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import "./index.css";

export const TopBar: React.FC = () => {
  return (
    <div className="board_list_header">
      <div className="search_container">
        <SearchIcon className="search_icon" />
        <InputBase placeholder="Search" className="search_input" />
      </div>
      <Button variant="contained">Create Board</Button>
    </div>
  );
};
