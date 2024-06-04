"use client";

import MyPostulatesPage from "@/components/MyPostulates/MyPostulatesPage";
import Docu4rentNavbar from "@/components/reusables/Docu4rentNavbar";

// import WhiteBackground from "./Images/Backgrounds/WhiteBackground.png";


export default function MyPostulates() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-[#121212]">
      <Docu4rentNavbar activeMyPostulatesValue />
      <MyPostulatesPage />
    </main>
  );
}
