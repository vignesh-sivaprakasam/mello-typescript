import * as React from "react";
import Box from "@mui/material/Box";

import { Color } from "./color";
import Typography from "@mui/material/Typography";

const { useState } = React;

const colors = [
  "#d93651",
  "#ff9f1a",
  "#ffd500",
  "#8acc47",
  "#47cc8a",
  "#30bfbf",
  "#00aaff",
  "#8f7ee6",
  "#98aab3",
];

export interface ColorComponentProps {
  activeColor: string;
  onColorChange: (_: string) => void;
}
export const ColorComponent: React.FC<ColorComponentProps> = ({
  activeColor,
  onColorChange,
}) => {
  return (
    <>
      <Typography padding={2} fontWeight="bold">
        Color
      </Typography>
      <Box display="flex">
        {colors.map((color) => (
          <Color
            key={color}
            isActive={activeColor === color}
            color={color}
            onClick={onColorChange}
          />
        ))}
      </Box>
    </>
  );
};
