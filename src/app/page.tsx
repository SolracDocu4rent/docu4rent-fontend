"use client";
import LandingPage from "../Components/Landing/LandingPage";
import WhiteBackgroundWrapper from "@/Components/Wrappers/WhiteBackgroundWrapper";

export default function Landing() {
  return (
    <WhiteBackgroundWrapper>
      <main className="flex min-h-screen flex-col items-center justify-center text-[#121212]">
        <LandingPage />
      </main>
    </WhiteBackgroundWrapper>
  );
}
