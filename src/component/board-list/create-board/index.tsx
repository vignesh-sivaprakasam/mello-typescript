import * as React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ReactModal } from "../../../common/modal/modal";
import DialogActions from "@mui/material/DialogActions";

import styles from "./index.module.css";

const { useState } = React;

interface CreateBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (_: string) => void;
}

export const CreateBoardModal: React.FC<CreateBoardModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [name, setName] = useState("");
  return (
    <>
      <ReactModal isOpen={isOpen} onClose={onClose} title="Create Board">
        <>
          <div className={styles.container}>
            <TextField
              label={"Name"}
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            ></TextField>
          </div>
          <DialogActions>
            <Button variant="text" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => onCreate(name)}>
              Create
            </Button>
          </DialogActions>
        </>
      </ReactModal>
    </>
  );
};
