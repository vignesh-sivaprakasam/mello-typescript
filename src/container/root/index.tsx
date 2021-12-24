import React from "react";
import Button from "@mui/material/Button";

import { AppContext } from "../../context";
import { AppRoutes } from "../../context/app-routes";

export const Root: React.FC = () => {
  return (
    <AppContext>
      <AppRoutes />
    </AppContext>
  );
};
