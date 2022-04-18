import * as React from "react";
import {
  Card as MUICard,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";
import { AddCardDialog } from "../stack/add-card-dialog";

export interface CardProps {
  id: string;
  title: string;
  description: string;
  onEdit: (id: string, title: string, description: string) => void;
}

const { useState } = React;

export const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  onEdit,
}) => {
  const [isCardEditDialogOpen, setIsCardEditDialogOpen] = useState(false);
  const onClose = () => {
    setIsCardEditDialogOpen(false);
  };
  const onClick = () => {
    setIsCardEditDialogOpen(true);
  };
  const onSubmit = (newTitle: string, newDescription: string) => {
    console.log("", { newTitle, newDescription });
    onEdit(id, newTitle, newDescription);
    onClose();
  };
  return (
    <>
      <MUICard raised={true} sx={{ margin: 2 }} onDoubleClick={onClick}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </MUICard>
      {isCardEditDialogOpen && (
        <AddCardDialog
          isOpen={isCardEditDialogOpen}
          title="Edit Card"
          cardTitle={title}
          cardDescription={description}
          onClose={onClose}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};
