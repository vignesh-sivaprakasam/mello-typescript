import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { AddCardDialog } from "./add-card-dialog";

const { useState } = React;

export interface AddCardProps {
  onCreate: (title: string, description: string) => void;
}

export const AddCard: React.FC<AddCardProps> = ({ onCreate }) => {
  const [isAddCardDialogOpen, setIsAddCardDialogOpen] = useState(false);
  const onClose = () => {
    setIsAddCardDialogOpen(false);
  };
  const onSubmit = (title: string, description: string) => {
    console.log("title: ", title, " description: ", description);
    onCreate(title, description);
    onClose();
  };
  return (
    <>
      <Fab
        size="medium"
        color="primary"
        aria-label="add"
        onClick={() => setIsAddCardDialogOpen(true)}
      >
        <AddIcon />
      </Fab>
      {isAddCardDialogOpen && (
        <AddCardDialog
          title="Add Card"
          isOpen={isAddCardDialogOpen}
          cardTitle="New card"
          cardDescription="New card description"
          onClose={onClose}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};
