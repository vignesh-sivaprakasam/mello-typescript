import * as React from "react";

import { LabelInput } from "../../../../common/LabelInput";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ReactModal } from "../../../../common/modal/modal";
import DialogActions from "@mui/material/DialogActions";
import { ColorComponent } from "../../../../common/ColorComponent";

const { useState } = React;

export interface EditStackDialogProps {
  title: string;
  isOpen: boolean;
  name: string;
  color: string;
  onClose: () => void;
  onSubmit: (_: string, _: string) => void;
}
export const EditStackDialog: React.FC<EditStackDialogProps> = ({
  title,
  isOpen,
  name,
  color,
  onSubmit,
  onClose,
}) => {
  const [stackName, setName] = useState(name);
  const [activeColor, setActiveColor] = useState(color);
  console.log("Active color: ", activeColor);
  return (
    <>
      <ReactModal isOpen={isOpen} onClose={onClose} title={title}>
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
            <ColorComponent
              activeColor={activeColor}
              onColorChange={setActiveColor}
            />
          </Box>
          <DialogActions>
            <Button variant="text" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => onSubmit(stackName, activeColor)}
            >
              Save
            </Button>
          </DialogActions>
        </Box>
      </ReactModal>
    </>
  );
};
