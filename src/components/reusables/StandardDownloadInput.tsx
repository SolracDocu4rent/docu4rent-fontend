import * as React from "react";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import firebaseServiceInstance from "@/services/firebase.service";

interface StandardDownloadInputProps {
  upperText: string;
  setValueInArray: (value: string, position: number) => void;
  arrayPosition: number;
  path: string;
  label?: string;
  defaultValue: string;
}

export const StandardDownloadInput = ({
  upperText,
  setValueInArray,
  arrayPosition,
  path,
  label,
  defaultValue,
}: StandardDownloadInputProps) => {
  const [inputValue, setInputValue] = React.useState(defaultValue);

  const handleFileSelection = async (file: File) => {
    try {
      setInputValue("Subiendo Archivo");
      const downloadURL = await uploadFileToStorage(file);
      setInputValue("Archivo Subido Correctamente");
    } catch (error) {
      setInputValue("Subir Archivo de nuevo");
      console.error('Error al subir el archivo:', error);
    }
  };

  const uploadFileToStorage = async (file: File): Promise<string> => {
    const downloadURL = await firebaseServiceInstance.uploadFileToStorage(file, path);
    return downloadURL;
  };


  const handleUploadButtonClick = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx';
    fileInput.onchange = (e) => {
      const fileList = (e.target as HTMLInputElement).files;
      if (fileList && fileList.length > 0) {
        const file = fileList[0];
        handleFileSelection(file);
      }
    };
    fileInput.click();
  };

  return (
    <>
      <div
        onClick={handleUploadButtonClick}
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