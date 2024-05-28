import { useState } from "react";
import RoundedButton from "../../Reusables/RoundedButton";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
interface ComponentProps {
  setStep: (value: number) => void;
}

export default function FailedPaymentStep({ setStep }: ComponentProps) {
  const [mercadoPagoOption, setmercadoPagoOption] = useState(false);
  let borderMercadoPago =
    "relative border-2 cursor-pointer hover:border-[#0C8CE9] border-[#BBBBB] w-fit rounded-md py-[20px] pl-[20px] pr-[100px]";
  let borderMercadoPagoSelected =
    "relative border-2 cursor-pointer border-[#0C8CE9] w-fit rounded-md py-[20px] pl-[20px] pr-[100px]";

  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center  gap-5 px-[10%] pt-[150px] pb-[30px] ">
      <h2 className="text-[#FFFFFF] font-bold text-[30px]">
        Tu pago no se procesó
      </h2>
      <div className="bg-[#FFFFFF] w-[100%] min-h-[500px] rounded-lg p-10 flex flex-col items-center">
        <div className="text-[100px]">
          <CancelRoundedIcon htmlColor="#CA0B00" fontSize="inherit" />
        </div>

        <h3 className="font-bold text-[20px] text-[#121212] pb-5">
          Tu pago no fue realizado
        </h3>
        <p className="w-[438px] text-center font-medium">
          Tuvimos un problema procesando tu pago, por favor reintenta.
        </p>

        <div className="flex flex-row justify-center pt-[70px] gap-5">
          <RoundedButton
            executableFunction={() => {
              setStep(101);
            }}
            buttonText="Mis postulaciones"
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
