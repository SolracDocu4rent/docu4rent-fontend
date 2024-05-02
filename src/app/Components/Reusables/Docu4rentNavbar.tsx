import React, { useEffect, useState } from "react";
//import SiacaLogo from "../../../images/logos/siacaLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
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
  const [activeHome, setHomeFligths] = useState(false);
  const [activeMyInfo, setActiveMyInfo] = useState(false);
  const [activeMyPostulates, setActiveMyPostulates] = useState(false);

  const Logout = async () => {
    const fetchData = async () => {
      try {
        const url = "/api/logout";
        const requestOptions = {
          method: "POST",
          body: JSON.stringify({
            userToken: localStorage.getItem("userToken"),
          }),
        };
        const response = await fetch(url, requestOptions).then((res) =>
          res.json().then((result) => {
            router.push("/");
          })
        );
      } catch (error) {
        console.error("Error geting user", error);
        return;
      }
    };
    await fetchData().catch(console.error);
  };

  const GoToHome = () => {
    router.push("/Home");
  };

  const GoToMyInfo = () => {
    router.push("/MyInfo");
  };

  const GoToMyPostulates = () => {
    router.push("/MyPostulates");
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
      <div className="flex flex-row items-center gap-2">
        <HomeOutlinedIcon htmlColor={activeHome ? "#7AC3C4" : "#A6A6A6"} />
        <h1
          className={activeHome ? activeItemText : inactiveItemText}
          onClick={() => GoToHome()}
        >
          Inicio
        </h1>
      </div>
      <div className="flex flex-row items-center gap-2">
        <FolderOpenOutlinedIcon
          htmlColor={activeMyInfo ? "#7AC3C4" : "#A6A6A6"}
        />
        <h1
          className={activeMyInfo ? activeItemText : inactiveItemText}
          onClick={() => GoToMyInfo()}
        >
          Mi información
        </h1>
      </div>

      <div className="flex flex-row items-center gap-2">
        <CalendarMonthRoundedIcon
          htmlColor={activeMyPostulates ? "#7AC3C4" : "#A6A6A6"}
        />
        <h1
          className={activeMyPostulates ? activeItemText : inactiveItemText}
          onClick={() => GoToMyPostulates()}
        >
          Mis postulaciones
        </h1>
      </div>

      <div className="flex flex-row items-center gap-2">
        <PersonOutlineRoundedIcon htmlColor="#7AC3C4" />
        <h4 className="text-[10px]" onClick={() => Logout()}>
          Log out
        </h4>
      </div>
    </div>
  );
};
export default Docu4rentNavbar;
