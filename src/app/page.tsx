"use client";

import ProfileHeader from "@/components/home/ProfileHeader";
import AboutSection from "@/components/home/AboutSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import StatsSection from "@/components/home/StatsSection";
import KeySkillsSection from "@/components/home/KeySkillsSection";
import TechStackSection from "@/components/home/TechStackSection";

export default function Home() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-0 py-8">
      <div className="md:flex md:justify-center">
        {/* Mobile-first profile block */}
        <div className="md:hidden mb-8">
          <div className="bg-mixed rounded-xl p-4">
            <ProfileHeader />
          </div>
        </div>
        <div className="md:grid md:grid-cols-[280px_760px] md:gap-12 md:items-start md:justify-center">
          <aside className="hidden md:block sticky top-8 w-[280px]">
            <div className="bg-mixed rounded-xl p-4">
              <ProfileHeader />
            </div>
          </aside>
          <div className="sm:flex sm:justify-center">
            <main className="w-full md:w-[760px] space-y-16">
              <section>
                <HighlightsSection />
              </section>
              <section>
                <AboutSection />
              </section>
              <section>
                <StatsSection />
              </section>
              <section>
                <KeySkillsSection />
              </section>
              <section>
                <TechStackSection />
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}