"use client";
import { PageTransition } from "@/src/common/components/PageTransition";
import HeroSection from "@/src/common/components/HeroSection";

export default function Home() {
  return (
    <div
      className="h-screen relative pb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/photo.avif')" }}
    >
      <PageTransition />
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-0" />

      <div className="absolute inset-0 z-10 overflow-auto pb-20">
        <HeroSection />
      </div>
    </div>
  );
}
