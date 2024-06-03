"use client";
// import WhiteBackground from "./Images/Backgrounds/WhiteBackground.png";
import Docu4rentNavbar from "@/components/reusables/Docu4rentNavbar";
import MyPostulatesPage from "@/components/MyPostulates/MyPostulatesPage";

export default function MyPostulates() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-[#121212]">
      <Docu4rentNavbar activeMyPostulatesValue />
      <MyPostulatesPage />
    </main>
  );
}
