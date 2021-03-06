import * as React from "react";
const { useState } = React;

import {
  Stack as StackComponent,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHorizRounded";

import { EditStackDialog } from "./edit-stack-dialog";

export interface StackHeaderProps {
  id: string;
  name: string;
  color: string;
  onEdit: (id: string, name: string, color: string) => void;
  onDelete: (id: string) => void;
}

export const StackHeader: React.FC<StackHeaderProps> = ({
  id,
  name,
  color,
  onEdit,
  onDelete,
}) => {
  const [menuElem, setMenuElement] = useState<Element | null>(null);
  const open = Boolean(menuElem);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const onClick = (ev: React.MouseEvent) => {
    setMenuElement(ev.currentTarget);
  };
  const handleClose = () => {
    setMenuElement(null);
  };

  const handleDeleteMenuClick = () => {
    onDelete(id);
    handleClose();
  };

  const handleEditMenuClick = () => {
    setIsEditDialogOpen(true);
  };
  return (
    <StackComponent
      direction="row"
      height={60}
      bgcolor={color}
      paddingX={1}
      alignItems="center"
    >
      <Box fontSize={25} flexGrow={1}>
        {name}
      </Box>
      <IconButton onClick={onClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={menuElem}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEditMenuClick}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteMenuClick}>Delete</MenuItem>
      </Menu>
      <EditStackDialog
        title="Edit Stack"
        isOpen={isEditDialogOpen}
        name={name}
        color={color}
        onClose={() => {
          setIsEditDialogOpen(false);
        }}
        onSubmit={(newName, newColor) => {
          onEdit(id, newName, newColor);
          setIsEditDialogOpen(false);
        }}
      />
    </StackComponent>
  );
};
