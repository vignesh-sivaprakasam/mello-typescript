import * as React from "react";

import Box from "@mui/material/Box";

export interface ColorProps {
  isActive?: boolean;
  color: string;
  onClick: (_: string) => void;
}

export const Color: React.FC<ColorProps> = ({
  isActive = false,
  color,
  onClick,
}) => {
  return (
    <Box
      sx={{ borderWidth: 2, borderStyle: "solid", cursor: "pointer" }}
      borderRadius="30px"
      borderColor={isActive ? "#00aaff" : "white"}
      onClick={() => {
        onClick(color);
      }}
    >
      <Box
        sx={{ borderWidth: 2 }}
        minWidth={30}
        minHeight={30}
        bgcolor={color}
        margin={0.5}
        borderRadius="30px"
      ></Box>
    </Box>
  );
};
