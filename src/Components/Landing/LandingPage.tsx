import RoundedButton from "@/components/reusables/RoundedButton";
import { useState } from "react";
import { GoogleIcon } from "@/app/images/Icons/GoogleIcon";
import { Box, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";

export default function LandingPage() {
  const { emailSignIn, googleSignIn, user } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center justify-center gap-5 ">
      <p className="text-[48px] font-[600] text-[#7AC3C4] font-['Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        docu4rent
      </p>
      <RoundedButton
        executableFunction={async () => {
          try {
            await googleSignIn();
            router.replace('/home');
          } catch (error) {
            console.log('loginError: ', error)
          }
        }}
        buttonText="Entrar con Google"
        icon={<GoogleIcon />}
        rounded
        border
      />
      <p className="text-[12px]">o continuar con</p>
      <TextField
        id="email-field"
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
        id="password-field"
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
          executableFunction={async () => {
            try {
              let user = await emailSignIn(email, password);
              router.replace('/home');
            } catch (error) {
              console.log('loginError: ', error)
            }
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
