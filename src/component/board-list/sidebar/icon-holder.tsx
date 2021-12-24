import React from "react";
import Box from "@mui/material/Box";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export const IconHolder = () => {
  return (
    <>
      <Box
        sx={{
          fontSize: 32,
          margin: 5,
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccessTimeFilledIcon fontSize="large" color="primary" />
        <Box sx={{ marginLeft: 2 }}>Mello</Box>
      </Box>
    </>
  );
};
