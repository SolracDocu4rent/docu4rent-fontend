import RoundedButton from "../../Reusables/RoundedButton";
import { useState } from "react";
import { GoogleIcon } from "@/app/Images/Icons/GoogleIcon";
import { Box, TextField } from "@mui/material";
import { StandardInput } from "../../Reusables/StandardInput";
import { StandardCombobox } from "../../Reusables/StandardCombobox";
import { StandardDownloadInput } from "../../Reusables/StandardDownloadInput";

interface ComponentProps {
  step3InputsArrayState: any;
  setstep3InputsArrayState: (value: any) => void;
  setStep: (value: number) => void;
  isDependantPerson: boolean;
  isIndependantPerson: boolean;
  isCompany: boolean;
  isPerson: boolean;
}

export default function MyInfoPageStep3({
  step3InputsArrayState,
  setstep3InputsArrayState,
  setStep,
  isDependantPerson,
  isIndependantPerson,
  isCompany,
  isPerson,
}: ComponentProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setValueInArray = (inputValue: string, arrayPosition: number) => {
    let auxiliaryArray = step3InputsArrayState;
    auxiliaryArray[arrayPosition].input_value = inputValue;
    setstep3InputsArrayState(auxiliaryArray);
    console.log(step3InputsArrayState);
  };

  const arrayPrinterOfInputsEven = () => {
    let y: any = [];
    let cont = 0;
    step3InputsArrayState.map((index: any) => {
      if (
        ((isPerson === true &&
          index?.is_person === true &&
          ((isDependantPerson === true && index?.is_dependant === true) ||
            (isIndependantPerson === true &&
              index?.is_independant === true))) ||
          (isCompany === true && index?.is_company === true)) &&
        index.is_odd % 2 === 0
      ) {
        y[cont] = (
          <div
            key={cont}
            className="flex flex-col items-baseline w-[85%] justify-end "
          >
            {index?.input_type === 0 ? (
              <StandardInput
                upperText={index.upper_text}
                setValueInArray={(value: string, position: number) =>
                  setValueInArray(value, index.input_id)
                }
                arrayPosition={index.input_id}
                label={index?.input_label}
                defaultValue={index.input_value}
              />
            ) : index?.input_type === 1 ? (
              <StandardCombobox
                setValueInArray={(value: string, position: number) =>
                  setValueInArray(value, index.input_id)
                }
                arrayPosition={index.input_id}
                upperText={index.upper_text}
                options={index.options}
                label={index.input_label}
                defaultValue={index.input_value}
              />
            ) : index?.input_type === 2 ? (
              <StandardDownloadInput
                upperText={index.upper_text}
                setValueInArray={(value: string, position: number) =>
                  setValueInArray(value, index.input_id)
                }
                arrayPosition={index.input_id}
                label={index?.input_label}
                defaultValue={index.input_value}
              />
            ) : index?.input_type === 3 ? (
              <div className="w-[100%] flex flex-col gap-3">
                <StandardCombobox
                  setValueInArray={(value: string, position: number) => {
                    let auxiliaryArray = step3InputsArrayState;
                    auxiliaryArray[index.input_id].first_input.input_value =
                      value;
                    setstep3InputsArrayState(auxiliaryArray);
                    console.log(step3InputsArrayState);
                  }}
                  arrayPosition={index.first_input.input_id}
                  upperText={index.upper_text}
                  options={index.first_input.options}
                  label={index.first_input.input_label}
                  defaultValue={index.first_input.input_value}
                />
                <StandardInput
                  upperText={" "}
                  setValueInArray={(value: string, position: number) => {
                    let auxiliaryArray = step3InputsArrayState;
                    auxiliaryArray[index.input_id].second_input.input_value =
                      value;
                    setstep3InputsArrayState(auxiliaryArray);
                    console.log(step3InputsArrayState);
                  }}
                  arrayPosition={index.second_input.input_id}
                  label={index.second_input.input_label}
                  defaultValue={index.second_input.input_value}
                />
              </div>
            ) : index?.input_type === 4 ? (
              <div className="w-[100%] flex flex-col gap-3">
                <StandardDownloadInput
                  upperText={index.upper_text}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 1"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 2"}
                  defaultValue={index.input_value}
                />
              </div>
            ) : index?.input_type === 5 ? (
              <div className="w-[100%] flex flex-col gap-3">
                <StandardDownloadInput
                  upperText={index.upper_text}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 1"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 2"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 3"}
                  defaultValue={index.input_value}
                />
              </div>
            ) : index?.input_type === 6 ? (
              <div className="w-[100%] flex flex-col gap-3">
                <StandardDownloadInput
                  upperText={index.upper_text}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 1"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 2"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 3"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 4"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 5"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 6"}
                  defaultValue={index.input_value}
                />
              </div>
            ) : (
              <>NO</>
            )}
          </div>
        );
        cont++;
      }
    });

    return y;
  };

  const arrayPrinterOfInputsOdd = () => {
    let y: any = [];
    let cont = 0;
    step3InputsArrayState.map((index: any) => {
      console.log("label", index?.label);
      if (
        ((isPerson === true &&
          index?.is_person === true &&
          ((isDependantPerson === true && index?.is_dependant === true) ||
            (isIndependantPerson === true &&
              index?.is_independant === true))) ||
          (isCompany === true && index?.is_company === true)) &&
        index.is_odd % 2 === 1
      ) {
        y[cont] = (
          <div
            key={cont}
            className="flex flex-col items-baseline w-[85%] justify-end "
          >
            {index?.input_type === 0 ? (
              <StandardInput
                upperText={index.upper_text}
                setValueInArray={(value: string, position: number) =>
                  setValueInArray(value, index.input_id)
                }
                arrayPosition={index.input_id}
                label={index?.input_label}
                defaultValue={index.input_value}
              />
            ) : index?.input_type === 1 ? (
              <StandardCombobox
                setValueInArray={(value: string, position: number) =>
                  setValueInArray(value, index.input_id)
                }
                arrayPosition={index.input_id}
                upperText={index.upper_text}
                options={index.options}
                label={index.input_label}
                defaultValue={index.input_value}
              />
            ) : index?.input_type === 2 ? (
              <StandardDownloadInput
                upperText={index.upper_text}
                setValueInArray={(value: string, position: number) =>
                  setValueInArray(value, index.input_id)
                }
                arrayPosition={index.input_id}
                label={index?.input_label}
                defaultValue={index.input_value}
              />
            ) : index?.input_type === 3 ? (
              <div className="w-[100%] flex flex-col gap-3">
                <StandardCombobox
                  setValueInArray={(value: string, position: number) => {
                    let auxiliaryArray = step3InputsArrayState;
                    auxiliaryArray[index.input_id].first_input.input_value =
                      value;
                    setstep3InputsArrayState(auxiliaryArray);
                    console.log(step3InputsArrayState);
                  }}
                  arrayPosition={index.first_input.input_id}
                  upperText={index.upper_text}
                  options={index.first_input.options}
                  label={index.first_input.input_label}
                  defaultValue={index.first_input.input_value}
                />
                <StandardInput
                  upperText={" "}
                  setValueInArray={(value: string, position: number) => {
                    let auxiliaryArray = step3InputsArrayState;
                    auxiliaryArray[index.input_id].second_input.input_value =
                      value;
                    setstep3InputsArrayState(auxiliaryArray);
                    console.log(step3InputsArrayState);
                  }}
                  arrayPosition={index.second_input.input_id}
                  label={index.second_input.input_label}
                  defaultValue={index.second_input.input_value}
                />
              </div>
            ) : index?.input_type === 4 ? (
              <div className="w-[100%] flex flex-col gap-3">
                <StandardDownloadInput
                  upperText={index.upper_text}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 1"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 2"}
                  defaultValue={index.input_value}
                />
              </div>
            ) : index?.input_type === 5 ? (
              <div className="w-[100%] flex flex-col gap-3">
                <StandardDownloadInput
                  upperText={index.upper_text}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 1"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 2"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 3"}
                  defaultValue={index.input_value}
                />
              </div>
            ) : index?.input_type === 6 ? (
              <div className="w-[100%] flex flex-col gap-3">
                <StandardDownloadInput
                  upperText={index.upper_text}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 1"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 2"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 3"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 4"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 5"}
                  defaultValue={index.input_value}
                />
                <StandardDownloadInput
                  upperText={""}
                  setValueInArray={(value: string, position: number) => {
                    //setValueInArray(value, index.input_id)
                  }}
                  arrayPosition={index.input_id}
                  label={"Carga documento 6"}
                  defaultValue={index.input_value}
                />
              </div>
            ) : (
              <>Cargando...</>
            )}
          </div>
        );
        cont++;
      }
    });

    return y;
  };

  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center  gap-5 px-[10%] pt-[150px] pb-[30px] ">
      <h2 className="text-[#FFFFFF] font-bold text-[30px]">Tus documentos</h2>
      <div className="bg-[#FFFFFF] w-[100%] min-h-[500px] rounded-lg p-10">
        <h3 className="font-bold text-[20px] text-[#121212]">
          Sube los documentos requeridos
        </h3>
        <div className="grid grid-cols-2 px-[10%] pt-[40px] gap-[5%]">
          <div className="flex flex-col width-[50%] gap-[30px]">
            {arrayPrinterOfInputsEven()}
          </div>
          <div className="flex flex-col width-[50%] gap-[30px]">
            {arrayPrinterOfInputsOdd()}
          </div>
        </div>
        <div className="flex flex-row justify-center pt-[70px] gap-5">
          <RoundedButton
            executableFunction={() => {
              setStep(2);
            }}
            buttonText="Atrás"
            rounded
            shadow
            boldText
            border
            standardSize={false}
          />
          <RoundedButton
            executableFunction={() => {
              setStep(4);
            }}
            buttonText="Siguiente"
            rounded
            shadow
            boldText
            primaryBackgroundColor
            whiteTextColor
            standardSize={false}
          />
        </div>
      </div>
    </main>
  );
}
