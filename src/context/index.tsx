import React, { ReactNode } from "react";

interface AppContextProps {
  children: ReactNode;
}
export const AppContext: React.FC<AppContextProps> = ({ children }) => (
  <>{children}</>
);
