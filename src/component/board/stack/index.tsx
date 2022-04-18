import * as React from "react";
import { Stack as StackComponent, Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StackHeader } from "./header/stack-header";
import { Card } from "../card";
import { CardType } from "../../../models/card";
import { AddCard } from "./add-card";

const { useState } = React;

export interface StackProps {
  id: string;
  name: string;
  color: string;
  cards: CardType[];
  onEdit: (stackID: string, name: string, color: string) => void;
  onDelete: (stackID: string) => void;
  onAddCard: (stackID: string) => (title: string, description: string) => void;
  onEditCard: (
    stackID: string
  ) => (cardId: string, title: string, description: string) => void;
}

export const Stack: React.FC<StackProps> = ({
  id: stackId,
  name,
  color,
  cards,
  onEdit,
  onDelete,
  onAddCard,
  onEditCard,
}) => {
  return (
    <StackComponent
      direction="column"
      minWidth={350}
      sx={{ bgcolor: "white", borderRight: 1, borderColor: "#a19e9e" }}
    >
      <StackHeader
        id={stackId}
        name={name}
        color={color}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <Box flexGrow={1} padding={1}>
        {cards.map(({ _id, title, description }) => (
          <Card
            key={_id}
            id={_id}
            title={title}
            description={description}
            onEdit={onEditCard(stackId)}
          />
        ))}
      </Box>
      <Box textAlign="center" padding={1}>
        <AddCard onCreate={onAddCard(stackId)} />
      </Box>
    </StackComponent>
  );
};
