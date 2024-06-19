import * as React from "react";
import { TextField } from "@mui/material";

interface ApplicationStep1Props {
  upperText: string;
  setValueInArray: (value: string, position: number) => void;
  arrayPosition: number;
  label?: string;
  isEmail?: boolean;
  inputType?: string;
  defaultValue: string;
}

export const StandardInput = ({
  upperText,
  setValueInArray,
  arrayPosition,
  label,
  isEmail = false,
  inputType = "text",
  defaultValue,
}: ApplicationStep1Props) => {
  const [inputValue, setInputValue] = React.useState(defaultValue);
  const [inputTypeState, setInputTypeState] = React.useState(inputType);
  const [validEmail, setValidEmail] = React.useState(false);
  const [emailLength, setEmailLength] = React.useState(0);

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function validatePhone(rawTel: string) {
    // phone number with only numeric, hyphen or + characters allowed
    const cleanTel = rawTel.replaceAll(/[^\d\-+]/gim, "");

    return cleanTel;
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
            if (inputType === "tel") {
              let validPhone = validatePhone(value);
              setValueInArray(validPhone, arrayPosition);
              setInputValue(validPhone);
            } else {
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
