import { useState } from "react";
import RoundedButton from "@/components/reusables/RoundedButton";
import Image from "next/image";
import MercadoPagoIcon2 from "@/app/Images/Icons/MercadoPagoIcon2.png";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
interface ComponentProps {
  setStep: (value: number) => void;
}

export default function SelectPaymentStep({ setStep }: ComponentProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mercadoPagoOption, setmercadoPagoOption] = useState(false);
  let borderMercadoPago =
    "relative border-2 cursor-pointer hover:border-[#0C8CE9] border-[#BBBBB] w-fit rounded-md py-[20px] pl-[20px] pr-[100px]";
  let borderMercadoPagoSelected =
    "relative border-2 cursor-pointer border-[#0C8CE9] w-fit rounded-md py-[20px] pl-[20px] pr-[100px]";

  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center  gap-5 px-[10%] pt-[150px] pb-[30px] ">
      <h2 className="text-[#FFFFFF] font-bold text-[30px]">Pago</h2>
      <div className="bg-[#FFFFFF] w-[100%] min-h-[500px] rounded-lg p-10">
        <h3 className="font-bold text-[20px] text-[#121212] pb-5">
          Detalle de pago
        </h3>
        <p className="font-medium text-[#121212] pl-[10px]">Método de pago</p>
        <div className="pl-[10px] pt-5">
          <div
            onClick={() => {
              setmercadoPagoOption(!mercadoPagoOption);
            }}
            className={
              mercadoPagoOption ? borderMercadoPagoSelected : borderMercadoPago
            }
          >
            {mercadoPagoOption && (
              <div className="absolute top-0 right-0">
                <CheckCircleRoundedIcon htmlColor="#0C8CE9" />
              </div>
            )}
            <Image src={MercadoPagoIcon2} height={50} alt="mercadoPagoOption" />
          </div>
        </div>
        <div className="flex flex-row justify-center pt-[70px] gap-5">
          <RoundedButton
            executableFunction={() => {
              setStep(3);
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
              setStep(99);
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
