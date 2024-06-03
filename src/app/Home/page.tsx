"use client";
import HomePage from "@/components/home/HomePage";
// import WhiteBackground from "./Images/Backgrounds/WhiteBackground.png";

import Docu4rentNavbar from "@/components/reusables/Docu4rentNavbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-[#121212]">
      <Docu4rentNavbar activeHomeValue />
      <HomePage />
    </main>
  );
}
