import * as React from "react";

import { Autocomplete, TextField } from "@mui/material";

interface ApplicationStep1Props {
  setValueInArray: (value: string, position: number) => void;
  arrayPosition: number;
  upperText: string;
  options: string[];
  label?: string;
  defaultValue: string;
}

export const StandardCombobox = ({
  //setValue,
  upperText,
  options,
  setValueInArray,
  arrayPosition,
  label,
  defaultValue,
}: ApplicationStep1Props) => {
  const [, /*value*/ setValue] = React.useState<string | null>(options[0]); //may be usefull later
  const [, /*inputValue*/ setInputValue] = React.useState(""); //may be usefull later
  const [inputDefaultValue, setInputDefaultValue] =
    React.useState(defaultValue);
  return (
    <>
      <div className="w-[100%] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        <p className="text-[#121212] font-medium text-[16px] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
          {upperText}
        </p>
        <Autocomplete
          value={inputDefaultValue === "" ? null : inputDefaultValue} //el valor que toma por defecto, esta comentado por que debe ser nulo
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
            setValueInArray(newValue === null ? "" : newValue, arrayPosition);
            setInputDefaultValue(newValue === null ? "" : newValue);
          }}
          //inputValue={x}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: "100%" }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} placeholder={label} />
          )}
        />
      </div>
    </>
  );
};
