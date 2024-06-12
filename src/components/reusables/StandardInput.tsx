import * as React from "react";
import { TextField } from "@mui/material";

interface ApplicationStep1Props {
  upperText: string;
  setValueInArray: (value: string, position: number) => void;
  arrayPosition: number;
  label?: string;
  isEmail?: boolean;
  defaultValue: string;
}

export const StandardInput = ({
  upperText,
  setValueInArray,
  arrayPosition,
  label,
  isEmail = false,
  defaultValue,
}: ApplicationStep1Props) => {
  const [inputValue, setInputValue] = React.useState(defaultValue);
  const [validEmail, setValidEmail] = React.useState(false);
  const [emailLength, setEmailLength] = React.useState(0);

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <>
      <div className="w-[100%] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        <div className="text-[#121212] font-medium text-[16px] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
          {upperText}
          {emailLength > 0 ? (
            validEmail ? (
              <p className="text-[10px] text-[#5cb85c]">
                ¡El Email introducido es válido!
              </p>
            ) : (
              <p className="text-[10px] text-[red]">
                ¡El Email introducido NO es válido!
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
            if (isEmail) {
              setEmailLength(value.length);
              if (validateEmail(value)) {
                setValidEmail(true);
              } else {
                setValidEmail(false);
              }
            }
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
