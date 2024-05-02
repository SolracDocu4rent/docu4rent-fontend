"use client";
import Image from "next/image";
import WhiteBackground from "./Images/Backgrounds/WhiteBackground.png";
import HomePage from "../Components/Home/HomePage";
import Docu4rentNavbar from "../Components/Reusables/Docu4rentNavbar";
import MyPostulatesPage from "../Components/MyPostulates/MyPostulatesPage";

export default function MyPostulates() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-[#121212]">
      <Docu4rentNavbar activeMyPostulatesValue />
      <MyPostulatesPage />
    </main>
  );
}
