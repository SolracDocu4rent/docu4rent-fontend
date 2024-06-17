import RoundedButton from "@/components/reusables/RoundedButton";
import { useEffect, useState } from "react";
import { StandardInput } from "@/components/reusables/StandardInput";
import { StandardCombobox } from "@/components/reusables/StandardCombobox";
import { StandardDownloadInput } from "@/components/reusables/StandardDownloadInput";
import firebaseServiceInstance from "@/services/firebase.service";
import { auth } from "@/firebase/firebase";

interface ComponentProps {
  step1InputsArrayState: any;
  setApplicationId: (value: any) => void;
  setStep1InputsArrayState: (value: any) => void;
  setStep: (value: number) => void;
  setIsCompany: (value: boolean) => void;
  setIsPerson: (value: boolean) => void;
}

export default function MyInfoPageStep1({
  step1InputsArrayState,
  setApplicationId,
  setStep1InputsArrayState,
  setStep,
  setIsPerson,
  setIsCompany,
}: ComponentProps) {
  const [email, setEmail] = useState("");
  const [disabledState, setDisabledState] = useState(false);
  const [showPostulateGuarantor, setShowPostulateGuarantor] = useState(false);

  const setValueInArray = (inputValue: string, arrayPosition: number) => {
    let auxiliaryArray = step1InputsArrayState;
    auxiliaryArray[arrayPosition].input_value = inputValue;
    setStep1InputsArrayState(auxiliaryArray);
    getDisabledNextButton();
  };

  useEffect(() => {
    if (step1InputsArrayState?.lenght > 1) {
      getDisabledNextButton();
    } else {
      setDisabledState(true);
    }
  }, []);

  const getDisabledNextButton = () => {
    if (step1InputsArrayState[0].input_value === "") {
      setDisabledState(true);
    } else if (step1InputsArrayState[1].input_value === "") {
      setDisabledState(true);
    } else if (step1InputsArrayState[2].input_value === "") {
      setDisabledState(true);
    } else if (step1InputsArrayState[3].input_value === "") {
      setDisabledState(true);
    } else if (
      step1InputsArrayState[4].first_input?.input_value === ""
      // || step1InputsArrayState[4].second_input?.input_value === ""
    ) {
      setDisabledState(true);
    } else if (step1InputsArrayState[5].input_value === "") {
      setDisabledState(true);
    } else {
      setDisabledState(false);
    }
  };

  const nextStep = async () => {
    if (step1InputsArrayState[5].input_value === "Empresa") {
      setIsCompany(true);
      setIsPerson(false);
    } else {
      setIsCompany(false);
      setIsPerson(true);
    }
    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        let data: SaveData = { userId: currentUser.uid };
        step1InputsArrayState.forEach((element: step1InputInterface) => {
          data[element.db_key] = element.input_value;
        });
        const applicationId =
          await firebaseServiceInstance.saveFirebaseDocument(
            "applications",
            data
          );
        setApplicationId(applicationId);
        setStep(2);
      } catch (error) {
        console.error("Error al obtener datos de usuario:", error);
      }
    } else {
      console.log("No hay usuario autenticado");
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
              isEmail={index.is_email}
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

                  if (value === "Si" && index?.key === "4") {
                    auxiliaryArray[index.input_id].first_input.input_value =
                      true;
                    setShowPostulateGuarantor(true);
                  } else if (index?.key === "4") {
                    setShowPostulateGuarantor(false);
                    auxiliaryArray[index.input_id].first_input.input_value =
                      false;
                  }
                  setStep1InputsArrayState(auxiliaryArray);
                  getDisabledNextButton();
                }}
                arrayPosition={index.first_input.input_id}
                upperText={index.upper_text}
                options={index.first_input.options}
                label={index.first_input.input_label}
                defaultValue={index.first_input.input_value ? "Si" : "No"}
              />
              {showPostulateGuarantor && (
                <StandardInput
                  upperText={" "}
                  setValueInArray={(value: string, position: number) => {
                    let auxiliaryArray = step1InputsArrayState;
                    auxiliaryArray[index.input_id].second_input.input_value =
                      value;

                    setStep1InputsArrayState(auxiliaryArray);
                    getDisabledNextButton();
                  }}
                  arrayPosition={index.second_input.input_id}
                  label={index.second_input.input_label}
                  defaultValue={index.second_input.input_value}
                />
              )}
            </div>
          ) : index?.input_type === 4 ? (
            <div className="w-[100%] flex flex-col gap-3">
              <StandardCombobox
                setValueInArray={(value: string, position: number) => {
                  let auxiliaryArray = step1InputsArrayState;

                  if (value === "Si") {
                    auxiliaryArray[index.input_id].input_value = true;
                    setShowPostulateGuarantor(true);
                  } else {
                    setShowPostulateGuarantor(false);
                    auxiliaryArray[index.input_id].input_value = false;
                  }
                  setStep1InputsArrayState(auxiliaryArray);
                  getDisabledNextButton();
                }}
                arrayPosition={index.input_id}
                upperText={index.upper_text}
                options={index.options}
                label={index.input_label}
                defaultValue={index.input_value ? "Si" : "No"}
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
            executableFunction={() => nextStep()}
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
