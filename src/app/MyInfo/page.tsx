"use client";
import Image from "next/image";
import WhiteBackground from "./Images/Backgrounds/WhiteBackground.png";
import HomePage from "../Components/Home/HomePage";
import Docu4rentNavbar from "../Components/Reusables/Docu4rentNavbar";
import MyInfoPageStep1 from "../Components/MyInfo/Step1/MyInfoPageStep1";
import { useEffect, useState } from "react";
import MyInfoPageStep2 from "../Components/MyInfo/Step2/MyInfoPageStep2";
import MyInfoPageStep3 from "../Components/MyInfo/Step3/MyInfoPageStep3";
import MyInfoPageStep4 from "../Components/MyInfo/Step4/MyInfoPageStep4";
import step1InputsArray from "../Components/MyInfo/Step1/Step1InputsArray";
import step2InputsArray from "../Components/MyInfo/Step2/Step2InputsArray";

export default function MyInfoPage() {
  const [step, setStep] = useState(1);
  const [isCompany, setisCompany] = useState(true);
  const [isPerson, setisPerson] = useState(false);
  const [step1InputsArrayState, setstep1InputsArrayState] = useState([{}]);
  const [step2InputsArrayState, setstep2InputsArrayState] = useState([{}]);

  useEffect(() => {
    //trae los datos cuando se entra a la pagina airlines
    setstep1InputsArrayState(step1InputsArray);
    setstep2InputsArrayState(step2InputsArray);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-[#121212]">
      <Docu4rentNavbar activeMyInfoValue />

      {step === 0 && <>Loading...</>}
      {step === 1 && (
        <MyInfoPageStep1
          step1InputsArrayState={step1InputsArrayState}
          setstep1InputsArrayState={setstep1InputsArrayState}
          setStep={setStep}
          setisCompany={setisCompany}
          setisPerson={setisPerson}
        />
      )}
      {step === 2 && (
        <MyInfoPageStep2
          step2InputsArrayState={step2InputsArrayState}
          setstep2InputsArrayState={setstep2InputsArrayState}
          setStep={setStep}
          isCompany={isCompany}
          isPerson={isPerson}
        />
      )}
      {step === 3 && <MyInfoPageStep3 />}
      {step === 4 && <MyInfoPageStep4 />}
    </main>
  );
}
