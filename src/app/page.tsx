"use client";

import LandingPage from "@/components/landing/landingPage";
import WhiteBackgroundWrapper from "@/components/wrappers/WhiteBackgroundWrapper";


export default function Landing() {
  return (
    <WhiteBackgroundWrapper>
      <main className="flex min-h-screen flex-col items-center justify-center text-[#121212]">
        <LandingPage />
      </main>
    </WhiteBackgroundWrapper>
  );
}
