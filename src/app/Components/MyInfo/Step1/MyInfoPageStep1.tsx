import RoundedButton from "../../Reusables/RoundedButton";
import { useEffect, useState } from "react";
import { GoogleIcon } from "@/app/Images/Icons/GoogleIcon";
import { Box, TextField } from "@mui/material";
import { StandardInput } from "../../Reusables/StandardInput";
import { StandardCombobox } from "../../Reusables/StandardCombobox";
import { StandardDownloadInput } from "../../Reusables/StandardDownloadInput";

interface ComponentProps {
  step1InputsArrayState: any;
  setstep1InputsArrayState: (value: any) => void;
  setStep: (value: number) => void;
  setisCompany: (value: boolean) => void;
  setisPerson: (value: boolean) => void;
}

export default function MyInfoPageStep1({
  step1InputsArrayState,
  setstep1InputsArrayState,
  setStep,
  setisPerson,
  setisCompany,
}: ComponentProps) {
  const [email, setEmail] = useState("");
  const [disabledState, setdisabledState] = useState(false);

  const setValueInArray = (inputValue: string, arrayPosition: number) => {
    let auxiliaryArray = step1InputsArrayState;
    auxiliaryArray[arrayPosition].input_value = inputValue;
    setstep1InputsArrayState(auxiliaryArray);
    getDisabledNextButton();
  };

  useEffect(() => {
    console.log("step1InputsArrayState?.lenght", step1InputsArrayState?.lenght);
    if (step1InputsArrayState?.lenght > 1) {
      //getDisabledNextButton();
    } else {
      console.log("DISABLE EN VERDADERO1");
      //setdisabledState(true);
    }
  }, []);

  const getDisabledNextButton = () => {
    if (step1InputsArrayState[0].input_value === "") {
      console.log("DISABLE EN VERDADERO2");
      setdisabledState(true);
    } else if (step1InputsArrayState[1].input_value === "") {
      console.log("DISABLE EN VERDADERO3");
      setdisabledState(true);
    } else if (step1InputsArrayState[2].input_value === "") {
      console.log("DISABLE EN VERDADERO4");
      setdisabledState(true);
    } else if (step1InputsArrayState[3].input_value === "") {
      console.log("DISABLE EN VERDADERO5");
      setdisabledState(true);
    } else if (
      step1InputsArrayState[4].first_input?.input_value === "" ||
      step1InputsArrayState[4].second_input?.input_value === ""
    ) {
      console.log("DISABLE EN VERDADERO6");
      setdisabledState(true);
    } else if (step1InputsArrayState[5].input_value === "") {
      console.log("DISABLE EN VERDADERO7");
      setdisabledState(true);
    } else {
      setdisabledState(false);
    }
  };

  const arrayPrinterOfInputs = () => {
    let y: any = [];
    let cont = 0;
    step1InputsArrayState.map((index: any) => {
      y[cont] = (
        <div
          key={cont}
          className="flex flex-col items-baseline w-[70%] justify-end "
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
                  let auxiliaryArray = step1InputsArrayState;
                  auxiliaryArray[index.input_id].first_input.input_value =
                    value;
                  setstep1InputsArrayState(auxiliaryArray);
                  getDisabledNextButton();
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
                  let auxiliaryArray = step1InputsArrayState;
                  auxiliaryArray[index.input_id].second_input.input_value =
                    value;
                  setstep1InputsArrayState(auxiliaryArray);
                  getDisabledNextButton();
                }}
                arrayPosition={index.second_input.input_id}
                label={index.second_input.input_label}
                defaultValue={index.second_input.input_value}
              />
            </div>
          ) : (
            <>Cargando...</>
          )}
        </div>
      );
      cont++;
    });

    return y;
  };

  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center  gap-5 px-[10%] pt-[150px] pb-[30px] ">
      <h2 className="text-[#FFFFFF] font-bold text-[30px]">
        Envío de información
      </h2>
      <div className="bg-[#FFFFFF] w-[100%] min-h-[500px] rounded-lg p-10">
        <h3 className="font-bold text-[20px] text-[#121212]">
          Envío de información
        </h3>
        <div className="grid grid-cols-2 gap-10 pt-[40px]">
          {arrayPrinterOfInputs()}
        </div>
        <div className="flex flex-row justify-center pt-[50px] gap-5">
          {/* <RoundedButton
            executableFunction={() => {
              //setStep(2)
            }}
            buttonText="Atrás"
            rounded
            shadow
            boldText
            border
            standardSize={false}
          /> */}
          <RoundedButton
            executableFunction={() => {
              if (step1InputsArrayState[5].input_value === "Empresa") {
                setisCompany(true);
                setisPerson(false);
              } else {
                setisCompany(false);
                setisPerson(true);
              }
              setStep(2);
            }}
            buttonText="Siguiente"
            rounded
            shadow
            boldText
            primaryBackgroundColor
            whiteTextColor
            standardSize={false}
            disabled={disabledState}
          />
        </div>
      </div>
    </main>
  );
}
