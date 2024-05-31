import * as React from "react";
import { TextField } from "@mui/material";

interface ApplicationStep1Props {
  upperText: string;
  setValueInArray: (value: string, position: number) => void;
  arrayPosition: number;
  label?: string;
  defaultValue: string;
}

export const StandardInput = ({
  upperText,
  setValueInArray,
  arrayPosition,
  label,
  defaultValue,
}: ApplicationStep1Props) => {
  const [inputValue, setInputValue] = React.useState(defaultValue);
  return (
    <>
      <div className="w-[100%] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        <p className="text-[#121212] font-medium text-[16px] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
          {upperText}
        </p>
        <TextField
          id="outlined-basic"
          placeholder={label}
          variant="outlined"
          onChange={({ target: { value } }) => {
            setValueInArray(value, arrayPosition);
            setInputValue(value);
          }}
          value={inputValue}
          size="small"
          sx={{ width: "100%" }}
        />
      </div>
    </>
  );
};
