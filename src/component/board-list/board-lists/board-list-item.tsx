import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import styles from "./board-list.module.css";

interface BoardListItemProps {
  id: string;
  name: string;
  dateCreated: string;
  onEdit: (id: string, name: string) => void;
  onDelete: (id: string) => void;
}
export const BoardListItem: React.FC<BoardListItemProps> = ({
  id,
  name,
  dateCreated,
  onEdit,
  onDelete,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [boardName, setBoardName] = useState(name);
  console.log("board : : : : :  ", boardName);

  const handleBlur = () => {
    setBoardName(name);
    setIsEdit(false);
  };
  return (
    <div className={styles.item}>
      <DashboardRoundedIcon color="primary" sx={{ padding: 2 }} />
      {isEdit ? (
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          value={boardName}
          autoFocus
          variant="standard"
          size="small"
          sx={{ marginLeft: 3, fontSize: 20, flex: 1 }}
          onBlur={handleBlur}
          onChange={(ev) => setBoardName(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.keyCode === 13) {
              onEdit(id, boardName);
              setIsEdit(false);
            }
          }}
        />
      ) : (
        <Typography sx={{ marginLeft: 3, fontSize: 20, flex: 1 }}>
          {boardName}
        </Typography>
      )}
      <div className={styles.date}>{dateCreated}</div>
      <Box className={styles.icon_container}>
        <IconButton
          onClick={() => {
            console.log("Edit click");
            setIsEdit(true);
          }}
        >
          <EditRoundedIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            onDelete(id);
            console.log("Delete click");
          }}
        >
          <DeleteOutlineRoundedIcon />
        </IconButton>
      </Box>
    </div>
  );
};
