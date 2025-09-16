"use client";

import ProfileHeader from "@/components/home/ProfileHeader";
import AboutSection from "@/components/home/AboutSection";
import KeySkillsSection from "@/components/home/KeySkillsSection";
import TechStackSection from "@/components/home/TechStackSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 gap-8">
      <ProfileHeader />
      <AboutSection />
      <KeySkillsSection />
      <TechStackSection />
    </div>
  );
}