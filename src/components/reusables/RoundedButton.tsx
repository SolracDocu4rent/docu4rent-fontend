import { useEffect, useState } from "react";

interface PageProps {
  executableFunction: () => void;
  buttonText: string; //text inside the button
  disabled?: boolean; //grey text when disabled. Functions will not be executed when disabled
  icon?: any; //optional icon
  rounded?: boolean; //true= full round. false = slight round edges
  boldText?: boolean; //true= bold text. false = regular text weight
  border?: boolean; //true=addborder. false = no border
  shadow?: boolean; //true=addshadow. false = no shadow
  primaryBackgroundColor?: boolean; //true= greenish background false: no background
  whiteTextColor?: boolean; //true= white text false: black text
  standardSize?: boolean; //true= standard 250px width false: fit content
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
  primaryBackgroundColor = false,
  whiteTextColor = false,
  standardSize = true,
}) => {
  const [disabledState, setdisabledState] = useState(false);
  useEffect(() => {
    disabled ? setdisabledState(true) : setdisabledState(false);
  }, []);
  let addRound = rounded === true ? " rounded-full " : " rounded ";
  let addBoldText = boldText === true ? " font-semibold " : "";
  let addBorder = border === true ? " border-2 border-gray-50 " : "";
  let addShadow = shadow === true ? " shadow-md " : "";
  let addBackgroundColor =
    primaryBackgroundColor === true ? " bg-[#609D9E]" : "";
  let addTextColor =
    whiteTextColor === true ? " text-[#FFFFFF] " : " text-[#121212] ";
  let addWidth = standardSize === true ? " min-w-[250px] " : "";

  const button =
    "text-[14px] py-2 px-7 cursor-pointer text-center  flex flex-row items-center justify-center gap-2.5 hover:font-bold hover:shadow-lg " +
    addRound +
    addBoldText +
    addBorder +
    addShadow +
    addBackgroundColor +
    addTextColor +
    whiteTextColor +
    addWidth;
  const disabledButton =
    "text-[14px] bg-[lightgray] py-2 px-7 cursor-pointer text-center  flex flex-row items-center justify-center gap-2.5 hover:font-bold hover:shadow-lg " +
    addRound +
    addBoldText +
    addBorder +
    addShadow +
    addTextColor +
    whiteTextColor +
    addWidth;
  return (
    <div
      onClick={!disabled ? () => executableFunction() : undefined}
      className={!disabled ? button : disabledButton}
    >
      {icon === null ? "" : icon}
      <h4
      //className={!disabled ? button : disabledButton}
      >
        {buttonText}
      </h4>
    </div>
  );
};

export default RoundedButton;
