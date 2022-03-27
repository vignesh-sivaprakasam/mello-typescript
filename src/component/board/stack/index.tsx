import * as React from "react";
import { Stack as StackComponent, Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StackHeader } from "./header/stack-header";

export interface StackProps {
  id: string;
  name: string;
  color: string;
  onEdit: (stackID: string, name: string, color: string) => void;
  onDelete: () => void;
}

export const Stack: React.FC<StackProps> = ({
  id,
  name,
  color,
  onEdit,
  onDelete,
}) => {
  return (
    <StackComponent
      direction="column"
      minWidth={350}
      sx={{ bgcolor: "white", borderRight: 1, borderColor: "#a19e9e" }}
    >
      <StackHeader
        id={id}
        name={name}
        color={color}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <Box flexGrow={1} padding={1}>
        Stack body
      </Box>
      <Box textAlign="center" padding={1}>
        <Fab size="medium" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </StackComponent>
  );
};
