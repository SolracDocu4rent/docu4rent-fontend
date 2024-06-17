"use client";
// import WhiteBackground from "./Images/Backgrounds/WhiteBackground.png";
import Docu4rentNavbar from "@/components/reusables/Docu4rentNavbar";
import MyInfoPageStep1 from "@/components/MyInfo/Step1/MyInfoPageStep1";
import { useEffect, useState } from "react";
import MyInfoPageStep2 from "@/components/MyInfo/Step2/MyInfoPageStep2";
import MyInfoPageStep3 from "@/components/MyInfo/Step3/MyInfoPageStep3";
import step1InputsArray from "@/components/MyInfo/Step1/Step1InputsArray";
import step2InputsArray from "@/components/MyInfo/Step2/Step2InputsArray";
import step3InputsArray from "@/components/MyInfo/Step3/Step3InputsArray";
import SelectPaymentStep from "@/components/MyInfo/Step4-SelectPayment/SelectPaymentStep";
import OutdatedDataStep from "@/components/MyInfo/Payments/OutdatedDataStep";
import FailedPaymentStep from "@/components/MyInfo/Payments/FailedPaymentStep";
import SuccessfulPaymentStep from "@/components/MyInfo/Payments/SuccessfulPaymentStep";

export default function MyInfoPage() {
  const [step, setStep] = useState(1);
  const [applicationId, setApplicationId] = useState("");
  const [isCompany, setIsCompany] = useState(true);
  const [isPerson, setIsPerson] = useState(false);
  const [isDependantPerson, setIsDependantPerson] = useState(false);
  const [isIndependantPerson, setIsIndependantPerson] = useState(false);
  const [step1InputsArrayState, setStep1InputsArrayState] = useState([{}]);
  const [step2InputsArrayState, setStep2InputsArrayState] = useState([{}]);
  const [step3InputsArrayState, setStep3InputsArrayState] = useState([{}]);
  useEffect(() => {
    //trae los datos cuando se entra a la pagina airlines
    setStep1InputsArrayState(step1InputsArray);
    setStep2InputsArrayState(step2InputsArray);
    setStep3InputsArrayState(step3InputsArray);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-[#121212]">
      <Docu4rentNavbar activeMyInfoValue />

      {step === 0 && <>Loading...</>}
      {step === 1 && (
        <MyInfoPageStep1
          step1InputsArrayState={step1InputsArrayState}
          setStep1InputsArrayState={setStep1InputsArrayState}
          setStep={setStep}
          setApplicationId={setApplicationId}
          setIsCompany={setIsCompany}
          setIsPerson={setIsPerson}
        />
      )}
      {step === 2 && (
        <MyInfoPageStep2
          step2InputsArrayState={step2InputsArrayState}
          setStep2InputsArrayState={setStep2InputsArrayState}
          setStep={setStep}
          applicationId={applicationId}
          isCompany={isCompany}
          isPerson={isPerson}
          setIsDependantPerson={setIsDependantPerson}
          setIsIndependantPerson={setIsIndependantPerson}
        />
      )}
      {step === 3 && (
        <MyInfoPageStep3
          step3InputsArrayState={step3InputsArrayState}
          setStep3InputsArrayState={setStep3InputsArrayState}
          setStep={setStep}
          isDependantPerson={isDependantPerson}
          isIndependantPerson={isIndependantPerson}
          isCompany={isCompany}
          isPerson={isPerson}
        />
      )}
      {step === 4 && <SelectPaymentStep setStep={setStep} />}
      {step === 99 && <SuccessfulPaymentStep setStep={setStep} />}
      {step === 100 && <FailedPaymentStep setStep={setStep} />}
      {step === 101 && <OutdatedDataStep setStep={setStep} />}
    </main>
  );
}
