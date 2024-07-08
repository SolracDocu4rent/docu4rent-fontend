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
  const [isCompany, setisCompany] = useState(true);
  const [isPerson, setisPerson] = useState(false);
  const [isDependantPerson, setIsDependantPerson] = useState(false);
  const [isIndependantPerson, setIsIndependantPerson] = useState(false);
  const [step1InputsArrayState, setstep1InputsArrayState] = useState([{}]);
  const [step2InputsArrayState, setstep2InputsArrayState] = useState([{}]);
  const [step3InputsArrayState, setstep3InputsArrayState] = useState([{}]);
  useEffect(() => {
    //trae los datos cuando se entra a la pagina airlines
    GetOptionsForCompanies();
    // setstep1InputsArrayState(step1InputsArray);
    setstep2InputsArrayState(step2InputsArray);
    setstep3InputsArrayState(step3InputsArray);
  }, []);

  const GetOptionsForCompanies = () => {
    //Fetch companies and set in step1
    let presetCompaniesInStep1Array = step1InputsArray;
    console.log(step1InputsArray);
    let mockresult = ["S&J Arriendos", "Depas C.A.", "Arriendos de santiago"];
    presetCompaniesInStep1Array[0].options = mockresult;
    setstep1InputsArrayState(presetCompaniesInStep1Array);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-[#121212]">
      <Docu4rentNavbar activeMyInfoValue />

      {step === 0 && <>Loading...</>}
      {step === 1 && (
        <MyInfoPageStep1
          step1InputsArrayState={step1InputsArrayState}
          setstep1InputsArrayState={setstep1InputsArrayState}
          setStep={setStep}
          setApplicationId={setApplicationId}
          setisCompany={setisCompany}
          setisPerson={setisPerson}
        />
      )}
      {step === 2 && (
        <MyInfoPageStep2
          step2InputsArrayState={step2InputsArrayState}
          setstep2InputsArrayState={setstep2InputsArrayState}
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
          setstep3InputsArrayState={setstep3InputsArrayState}
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
