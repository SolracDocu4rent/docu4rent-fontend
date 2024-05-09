"use client";
import Image from "next/image";
import WhiteBackground from "./Images/Backgrounds/WhiteBackground.png";
import HomePage from "../Components/Home/HomePage";
import Docu4rentNavbar from "../Components/Reusables/Docu4rentNavbar";
import MyInfoPage from "../Components/MyInfo/MyInfoPage";

export default function MyInfo() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-[#121212]">
      <Docu4rentNavbar activeMyInfoValue />
      <MyInfoPage />
    </main>
  );
}
