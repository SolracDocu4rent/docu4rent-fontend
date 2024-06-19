import * as React from "react";
import { TextField } from "@mui/material";
import {
  cleanParts,
  calculate,
  verifier,
  validate,
  format,
  digits,
  clean,
} from "@validatecl/rut";

interface ApplicationStep1Props {
  upperText: string;
  setValueInArray: (value: string, position: number) => void;
  arrayPosition: number;
  label?: string;
  defaultValue: string;
}

export const StandardInputRUT = ({
  upperText,
  setValueInArray,
  arrayPosition,
  label,
  defaultValue,
}: ApplicationStep1Props) => {
  const [inputValue, setInputValue] = React.useState(defaultValue);
  const [validRut, setValidRut] = React.useState(false);
  const [rutLength, setRutLength] = React.useState(0);
  return (
    <>
      <div className="w-[100%] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        <div className="flex flex-row gap-1 items-baseline text-[#121212] font-medium text-[16px] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
          {upperText + " "}
          {rutLength > 0 ? (
            validRut ? (
              <p className="text-[10px] text-[#5cb85c]">
                ¡El RUT introducido es válido!
              </p>
            ) : (
              <p className="text-[10px] text-[red]">
                ¡El RUT introducido NO es válido!
              </p>
            )
          ) : (
            <></>
          )}
        </div>

        <TextField
          id="outlined-basic"
          placeholder={label}
          variant="outlined"
          onChange={({ target: { value } }) => {
            let validRut = value;
            setRutLength(value.length);
            if (value.length >= 3) {
              let x = value.replace("-", "");
              x = x.replace(".", "");
              setInputValue(format(x));
              setValueInArray(x, arrayPosition);
            } else {
              let y = value.replace("-", "");
              y = value.replace(".", "");
              y.replace("-", "");
              setInputValue(y);
              setValueInArray(y, arrayPosition);
            }
            validRut = validRut.replace(".", "");
            validRut = validRut.replace("-", "");
            if (validate(validRut)) {
              setValidRut(true);
            } else {
              setValidRut(false);
            }
          }}
          value={inputValue}
          size="small"
          sx={{ width: "100%" }}
        />
      </div>
    </>
  );
};
