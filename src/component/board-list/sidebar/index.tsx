import React from "react";
import { IconHolder } from "./icon-holder";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Box from "@mui/material/Box";

export const SideBar = () => {
  return (
    <>
      <div className="board_list_sidebar">
        <IconHolder />
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: 24,
              color: "#fff",
              padding: "0px 32px",
              borderRadius: "0.5rem",
              border: "1px solid",
              height: 50,
            }}
          >
            <HomeRoundedIcon fontSize="medium" sx={{ color: "#fff" }} />
            <Box mx={1}> All Boards</Box>
          </Box>
        </div>
      </div>
    </>
  );
};
