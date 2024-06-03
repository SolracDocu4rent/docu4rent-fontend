import RoundedButton from "@/components/Reusables/RoundedButton";
import { useState } from "react";
import { StandardInput } from "@/components/Reusables/StandardInput";
import { StandardCombobox } from "@/components/Reusables/StandardCombobox";
import { StandardDownloadInput } from "@/components/Reusables/StandardDownloadInput";

interface ComponentProps {
  step2InputsArrayState: any;
  setstep2InputsArrayState: (value: any) => void;
  setStep: (value: number) => void;
  isCompany: boolean;
  isPerson: boolean;
  setIsDependantPerson: (value: boolean) => void;
  setIsIndependantPerson: (value: boolean) => void;
}

export default function MyInfoPageStep3({
  step2InputsArrayState,
  setstep2InputsArrayState,
  setStep,
  isCompany,
  isPerson,
  setIsDependantPerson,
  setIsIndependantPerson,
}: ComponentProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setValueInArray = (inputValue: string, arrayPosition: number) => {
    let auxiliaryArray = step2InputsArrayState;
    auxiliaryArray[arrayPosition].input_value = inputValue;
    setstep2InputsArrayState(auxiliaryArray);
    console.log(step2InputsArrayState);
  };

  const arrayPrinterOfInputs = () => {
    let y: any = [];
    let cont = 0;
    step2InputsArrayState.map((index: any) => {
      if (
        (isPerson === true && index?.is_person === true) ||
        (isCompany === true && index?.is_company === true)
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
                    let auxiliaryArray = step2InputsArrayState;
                    auxiliaryArray[index.input_id].first_input.input_value =
                      value;
                    setstep2InputsArrayState(auxiliaryArray);
                    console.log(step2InputsArrayState);
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
                    let auxiliaryArray = step2InputsArrayState;
                    auxiliaryArray[index.input_id].second_input.input_value =
                      value;
                    setstep2InputsArrayState(auxiliaryArray);
                    console.log(step2InputsArrayState);
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
      }
    });

    return y;
  };

  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center  gap-5 px-[10%] pt-[150px] pb-[30px] ">
      <h2 className="text-[#FFFFFF] font-bold text-[30px]">
        {isPerson ? "Tu información" : "Información Empresa"}
      </h2>
      <div className="bg-[#FFFFFF] w-[100%] min-h-[500px] rounded-lg p-10">
        <h3 className="font-bold text-[20px] text-[#121212]">
          Completa la siguiente información requerida por el propietario
        </h3>
        <div className="grid grid-cols-4 gap-5 pt-[40px]">
          {arrayPrinterOfInputs()}
        </div>
        <div className="flex flex-row justify-center pt-[70px] gap-5">
          <RoundedButton
            executableFunction={() => {
              setStep(1);
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
              if (step2InputsArrayState[15].input_value === "Dependiente") {
                setIsDependantPerson(true);
                setIsIndependantPerson(false);
              } else {
                setIsDependantPerson(false);
                setIsIndependantPerson(true);
              }
              setStep(3);
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
