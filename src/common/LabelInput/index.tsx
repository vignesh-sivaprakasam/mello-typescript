import * as React from "react";
import TextField from "@mui/material/TextField";

export interface LabelInputProps {
  labelText: string;
  value: string;
  fullWidth?: boolean;
  onChange: (ev: React.ChangeEvent) => void;
}

export const LabelInput: React.FC<LabelInputProps> = ({
  labelText,
  value,
  fullWidth,
  onChange,
}) => {
  return (
    <>
      <TextField
        label={labelText}
        value={value}
        fullWidth={fullWidth}
        onChange={onChange}
      />
    </>
  );
};
