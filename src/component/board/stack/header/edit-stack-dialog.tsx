import * as React from "react";

import { LabelInput } from "../../../../common/LabelInput";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ReactModal } from "../../../../common/modal/modal";
import DialogActions from "@mui/material/DialogActions";
import { ColorComponent } from "../../../../common/ColorComponent";

const { useState } = React;

export interface EditStackDialogProps {
  isOpen: boolean;
  name: string;
  onClose: () => void;
  onSubmit: (_: string) => void;
}
export const EditStackDialog: React.FC<EditStackDialogProps> = ({
  isOpen,
  name,
  onSubmit,
  onClose,
}) => {
  const [stackName, setName] = useState(name);
  return (
    <>
      <ReactModal isOpen={isOpen} onClose={onClose} title="Edit Stack">
        <Box width={500}>
          <Box padding={2}>
            <LabelInput
              labelText={"Name"}
              value={stackName}
              fullWidth={true}
              onChange={({ target: { value } }) => {
                setName(value);
              }}
            />
            <ColorComponent />
          </Box>
          <DialogActions>
            <Button variant="text" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => onSubmit("asd")}>
              Create
            </Button>
          </DialogActions>
        </Box>
      </ReactModal>
    </>
  );
};
