import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

interface ModalProps {
  children: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const ReactModal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
};
