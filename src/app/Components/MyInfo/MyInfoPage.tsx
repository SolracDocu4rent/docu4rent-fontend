import RoundedButton from "../Reusables/RoundedButton";
import { useState } from "react";
import { GoogleIcon } from "@/app/Images/Icons/GoogleIcon";
import { Box, TextField } from "@mui/material";

export default function MyInfoPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center justify-center gap-5 bg-[url(Images/Backgrounds/WhiteBackground.png)] bg-[length:100%_100%]">
      <p className="text-[48px] font-[600] text-[#7AC3C4] font-['Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        docu4rent
      </p>
      <p className="text-[48px] font-[600] text-[#7AC3C4] font-['Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        docu4rent
      </p>
      <p className="text-[48px] font-[600] text-[#7AC3C4] font-['Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        docu4rent
      </p>
      <p className="text-[48px] font-[600] text-[#7AC3C4] font-['Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        docu4rent
      </p>
      <p className="text-[48px] font-[600] text-[#7AC3C4] font-['Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        docu4rent
      </p>
    </main>
  );
}
