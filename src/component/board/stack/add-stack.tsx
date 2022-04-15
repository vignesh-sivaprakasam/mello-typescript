import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { EditStackDialog } from "./header/edit-stack-dialog";
import { colors } from "./../../../common/ColorComponent";

const { useState } = React;

export interface AddStackProps {
  onCreate: (name: string, color: string) => void;
}

export const AddStack: React.FC<AddStackProps> = ({ onCreate }) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const onClose = () => {
    setIsEditDialogOpen(false);
  };
  return (
    <Box minWidth={350}>
      <Button
        variant="text"
        startIcon={<AddIcon />}
        onClick={() => setIsEditDialogOpen(true)}
      >
        Add Stack
      </Button>
      {isEditDialogOpen && (
        <EditStackDialog
          title="Add Stack"
          isOpen={isEditDialogOpen}
          name="New Stack"
          color={colors[0]}
          onClose={onClose}
          onSubmit={onCreate}
        />
      )}
    </Box>
  );
};
