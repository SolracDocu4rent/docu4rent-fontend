import React, { useEffect, useState } from "react";
//import SiacaLogo from "../../../images/logos/siacaLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { UserAuth } from "@/context/AuthContext";
interface PageProps {
  activeHomeValue?: boolean;
  activeMyInfoValue?: boolean;
  activeMyPostulatesValue?: boolean;
}

const Docu4rentNavbar: React.FC<PageProps> = ({
  activeHomeValue,
  activeMyInfoValue,
  activeMyPostulatesValue,
}) => {
  useEffect(() => {
    if (activeHomeValue) setHomeFligths(activeHomeValue);
    if (activeMyInfoValue) setActiveMyInfo(activeMyInfoValue);
    if (activeMyPostulatesValue) setActiveMyPostulates(activeMyPostulatesValue);
  }, []);

  const router = useRouter();
  const { logOut, user } = UserAuth();
  const [activeHome, setHomeFligths] = useState(false);
  const [activeMyInfo, setActiveMyInfo] = useState(false);
  const [activeMyPostulates, setActiveMyPostulates] = useState(false);


  const GoToHome = () => {
    router.push("/home");
  };

  const GoToMyInfo = () => {
    router.push("/personal-information");
  };

  const GoToMyPostulates = () => {
    router.push("/applications");
  };

  const activeItemText =
    "text-[14px] text-[#7AC3C4] hover:text-[#7AC3C4] cursor-pointer font-medium";
  const inactiveItemText =
    "text-[14px] text-[#A6A6A6] hover:text-[#7AC3C4] cursor-pointer font-medium";

  return (
    <div className="fixed top-0 h-[90px] w-[100%] bg-[#FFFFFF] z-999 flex flex-row items-center px-[40px] justify-between border-b-2 border-b-gray font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
      <p className="text-[38px] font-[600] text-[#7AC3C4] font-['Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
        docu4rent
      </p>
      <div
        onClick={() => GoToHome()}
        className="flex flex-row items-center gap-2"
      >
        <HomeOutlinedIcon
          className="cursor-pointer"
          htmlColor={activeHome ? "#7AC3C4" : "#A6A6A6"}
        />
        <h1 className={activeHome ? activeItemText : inactiveItemText}>
          Inicio
        </h1>
      </div>
      <div
        onClick={() => GoToMyInfo()}
        className="flex flex-row items-center gap-2"
      >
        <FolderOpenOutlinedIcon
          htmlColor={activeMyInfo ? "#7AC3C4" : "#A6A6A6"}
          className="cursor-pointer"
        />
        <h1 className={activeMyInfo ? activeItemText : inactiveItemText}>
          Mi información
        </h1>
      </div>

      <div
        onClick={() => GoToMyPostulates()}
        className="flex flex-row items-center gap-2"
      >
        <CalendarMonthRoundedIcon
          htmlColor={activeMyPostulates ? "#7AC3C4" : "#A6A6A6"}
          className="cursor-pointer"
        />
        <h1 className={activeMyPostulates ? activeItemText : inactiveItemText}>
          Mis postulaciones
        </h1>
      </div>

      <div className="flex flex-row items-center gap-2 cursor-pointer">
        <PersonOutlineRoundedIcon htmlColor="#7AC3C4" />
        <h4
          className="text-[10px] text-[#7AC3C4]"
          onClick={() => {
            logOut();
          }}
        >
          Cerrar sesión
        </h4>
        <KeyboardArrowDownRoundedIcon htmlColor="#7AC3C4" />
      </div>
    </div>
  );
};
export default Docu4rentNavbar;
