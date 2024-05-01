import styles from "./GreenButton2.style.module.css";
import { useMediaQuery } from "@mui/material";
interface PageProps {
  executableFunction: () => void;
  buttonText: string; //text inside the button
  disabled?: boolean; //grey text when disabled. Functions will not be executed when disabled
  icon?: any; //optional icon
  rounded?: boolean; //true= full round. false = slight round edges
  boldText?: boolean; //true= bold text. false = regular text weight
  border?: boolean; //true=addborder. false = no border
  shadow?: boolean; //true=addshadow. false = no shadow
}

const RoundedButton: React.FC<PageProps> = ({
  executableFunction,
  buttonText,
  disabled = false,
  icon = null,
  rounded = false,
  boldText = false,
  border = false,
  shadow = false,
}) => {
  let addRound = rounded === true ? " rounded-full " : " rounded ";
  let addBoldText = boldText === true ? " font-semibold " : "";
  let addBorder = border === true ? " border-2 border-gray-50 " : "";
  let addShadow = shadow === true ? " shadow-md " : "";
  const button =
    "text-[14px] p-2.5 cursor-pointer text-center  flex flex-row items-center justify-center gap-2.5 min-w-[250px] hover:font-bold hover:shadow-lg " +
    addRound +
    addBoldText +
    addBorder +
    addShadow;

  const disabledButton =
    "text-[14px] text-[lightgray] p-2.5 rounded-full cursor-pointer text-center border-2 border-gray-50 flex flex-row items-center justify-center gap-2.5 min-w-[250px]";

  return (
    <div className={!disabled ? button : disabledButton}>
      {icon === null ? "" : icon}
      <h4
        //className={!disabled ? button : disabledButton}
        onClick={!disabled ? () => executableFunction() : undefined}
      >
        {buttonText}
      </h4>
    </div>
  );
};

export default RoundedButton;
