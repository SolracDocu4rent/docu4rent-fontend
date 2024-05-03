import RoundedButton from "../Reusables/RoundedButton";
import { useState } from "react";
import { GoogleIcon } from "@/app/Images/Icons/GoogleIcon";
import { Box, TextField } from "@mui/material";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center justify-center gap-5 ">
      <p className="text-[48px] font-[600] text-[#7AC3C4] font-['Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        docu4rent
      </p>
      <RoundedButton
        executableFunction={() => {
          console.log("click");
        }}
        buttonText="Entrar con Google"
        icon={<GoogleIcon />}
        rounded
        border
      />
      <p className="text-[12px]">o continuar con</p>
      <TextField
        id="outlined-basic"
        label="Correo Electrónico"
        variant="outlined"
        size="small"
        sx={{
          minWidth: "250px",

          "& label": {
            fontFamily:
              "'Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial'",
            fontSize: "14px",
          },
          "& input": {
            fontSize: "14px",
          },
        }}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <TextField
        id="outlined-basic"
        label="Contraseña"
        variant="outlined"
        size="small"
        sx={{
          minWidth: "250px",

          "& label": {
            fontFamily:
              "'Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial'",
            fontSize: "14px",
          },
          "& input": {
            fontSize: "14px",
          },
        }}
        type="password"
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <Box sx={{ m: 1 }} />
      <div>
        <RoundedButton
          executableFunction={() => {
            console.log("click");
          }}
          buttonText="Entrar"
          rounded={false}
          shadow
          boldText
        />
        <p className="text-[12px] hover:font-semibold hover:cursor-pointer w-[100%] text-right pt-2">
          Recuperar contraseña
        </p>
      </div>
    </main>
  );
}
