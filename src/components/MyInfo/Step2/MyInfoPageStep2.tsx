import RoundedButton from "@/components/reusables/RoundedButton";
import { useState } from "react";
import { StandardInput } from "@/components/reusables/StandardInput";
import { StandardCombobox } from "@/components/reusables/StandardCombobox";
import { StandardDownloadInput } from "@/components/reusables/StandardDownloadInput";
import {
  cleanParts,
  calculate,
  verifier,
  validate,
  format,
  digits,
  clean,
} from "@validatecl/rut";
import { StandardInputRUT } from "@/components/reusables/StandardInputRUT";
import firebaseServiceInstance from "@/services/firebase.service";

function groupCompanyFields(data: SaveData) {
  const companyData: SaveData = {};
  const userData: SaveData = {};

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (key.startsWith('Company_')) {
        const newKey = key.replace('Company_', '');
        companyData[newKey] = data[key];
      } else {
        userData[key] = data[key];
      }
    }
  }
  if (Object.keys(companyData).length > 0) {
    userData['company'] = companyData;
  }
  return userData;
}

interface ComponentProps {
  step2InputsArrayState: any;
  setstep2InputsArrayState: (value: any) => void;
  setStep: (value: number) => void;
  applicationId: string;
  isCompany: boolean;
  isPerson: boolean;
  setIsDependantPerson: (value: boolean) => void;
  setIsIndependantPerson: (value: boolean) => void;
}

export default function MyInfoPageStep3({
  step2InputsArrayState,
  setstep2InputsArrayState,
  setStep,
  applicationId,
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
    //console.log(step2InputsArrayState);
  };

  const nextStep = async () => {
    if (step2InputsArrayState[15].input_value === "Dependiente") {
      setIsDependantPerson(true);
      setIsIndependantPerson(false);
    } else {
      setIsDependantPerson(false);
      setIsIndependantPerson(true);
    }
    console.log('applicationID', applicationId)
    if (applicationId != '') {
      try {
        let data: SaveData = { applicationId }
        step2InputsArrayState.forEach((element: step2InputInterface) => {
          data[element.db_key] = element.input_value
        });
        data = groupCompanyFields(data)
        const documentId = await firebaseServiceInstance.saveFirebaseDocument('applicationData', data);
        setStep(3);
      } catch (error) {
        console.error('Error al obtener datos de usuario:', error);
      }
    } else {
      console.log('No hay usuario autenticado');
    }
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
                path={index.path}
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
                    //console.log(step2InputsArrayState);
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
                    //console.log(step2InputsArrayState);
                  }}
                  arrayPosition={index.second_input.input_id}
                  label={index.second_input.input_label}
                  defaultValue={index.second_input.input_value}
                />
              </div>
            ) : index?.input_type === 7 ? (
              <StandardInputRUT
                upperText={index.upper_text}
                setValueInArray={(value: string, position: number) => {
                  setValueInArray(value, index.input_id);
                }}
                arrayPosition={index.input_id}
                label={index?.input_label}
                defaultValue={index.input_value}
              />
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
            executableFunction={() => nextStep()}
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
