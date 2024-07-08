import * as React from "react";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

interface StandardDownloadInputProps {
  upperText: string;
  setValueInArray: (value: string, position: number) => void;
  arrayPosition: number;
  label?: string;
  defaultValue: string;
}

export const StandardDownloadInput = ({
  upperText,
  setValueInArray,
  arrayPosition,
  label,
  defaultValue,
}: StandardDownloadInputProps) => {
  const [inputValue, setInputValue] = React.useState(defaultValue);

  function uploadFunction() {
    console.log("click");
  }

  return (
    <>
      <div
        onClick={() => uploadFunction}
        className="w-[100%] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial'] cursor-pointer"
      >
        <p className="text-[#121212] font-medium text-[16px] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
          {upperText}
        </p>
        <div className="rounded border-[1.5px] border-[#BBBBBB] hover:border-[black] h-[40px] flex flex-row items-center justify-between px-3 text-[20px]">
          <p className="text-[14px] text-[lightgray]">
            {inputValue === "" ? label : inputValue}
          </p>
          <div className="rounded-[30px] border-[1.5px] border-[#BBBBBB] hover:border-[black] flex  items-center justify-center p-[3px]">
            <FileUploadRoundedIcon htmlColor="#BBBBBB" fontSize="inherit" />
          </div>
        </div>
      </div>
    </>
  );
};
