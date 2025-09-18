export default function KeySkillsSection() {
  const skills = [
    { name: "Full‑stack Development", icon: "fas fa-code" },
    { name: "Responsive Design", icon: "fas fa-mobile-alt" },
    { name: "API Development", icon: "fas fa-plug" },
    { name: "UI/UX Design", icon: "fas fa-pencil-ruler" },
    { name: "Team Leadership", icon: "fas fa-users" },
    { name: "Project Management", icon: "fas fa-tasks" },
    { name: "Security & Auth", icon: "fas fa-shield-alt" },
    { name: "Performance", icon: "fas fa-rocket" },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center">Key Skills</h2>
      <div className="mt-2 flex flex-wrap gap-3 sm:gap-4 sm:justify-center">
        {skills.map((s) => (
          <div
            key={s.name}
            className="tech-chip inline-flex items-center !gap-3 rounded-lg border border-neutral-200/60 bg-white/50 !px-5 !py-2.5 !text-base font-medium text-[color:var(--foreground)] shadow-sm ring-1 ring-transparent transition duration-200 transition-colors hover:bg-black/5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 motion-reduce:transition-none dark:border-neutral-800 dark:bg-white/5 dark:hover:border-neutral-700 dark:hover:bg-white/10 whitespace-nowrap min-h-[40px]"
          >
            <i className={`${s.icon} text-[20px]`}></i>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
