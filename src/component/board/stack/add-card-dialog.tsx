import * as React from "react";

import { LabelInput } from "../../../common/LabelInput";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ReactModal } from "../../../common/modal/modal";
import DialogActions from "@mui/material/DialogActions";

const { useState } = React;

export interface AddCardDialogProps {
  title: string;
  isOpen: boolean;
  cardTitle: string;
  cardDescription: string;
  onClose: () => void;
  onSubmit: (_: string, __: string) => void;
}
export const AddCardDialog: React.FC<AddCardDialogProps> = ({
  title,
  isOpen,
  cardTitle: cardHeaderTitle,
  cardDescription: cardHeaderDescription,
  onSubmit,
  onClose,
}) => {
  const [cardTitle, setCardTitle] = useState(cardHeaderTitle);
  const [cardDescription, setCardDescription] = useState(cardHeaderDescription);
  return (
    <>
      <ReactModal isOpen={isOpen} onClose={onClose} title={title}>
        <Box width={500}>
          <Box padding={2}>
            <LabelInput
              labelText={"Title"}
              value={cardTitle}
              fullWidth={true}
              onChange={({ target: { value } }) => {
                setCardTitle(value);
              }}
            />
          </Box>
          <Box padding={2}>
            <LabelInput
              labelText={"Description"}
              value={cardDescription}
              fullWidth={true}
              onChange={({ target: { value } }) => {
                setCardDescription(value);
              }}
            />
          </Box>
          <DialogActions>
            <Button variant="text" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => onSubmit(cardTitle, cardDescription)}
            >
              Save
            </Button>
          </DialogActions>
        </Box>
      </ReactModal>
    </>
  );
};
