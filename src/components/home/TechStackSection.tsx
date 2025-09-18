export default function TechStackSection() {
  const items = [
    // Frontend
    { name: "React", slug: "react", href: "https://reactjs.org/" },
    { name: "Next.js", slug: "nextdotjs", href: "https://nextjs.org/" },
    { name: "TailwindCSS", slug: "tailwindcss", href: "https://tailwindcss.com/" },
    { name: "JavaScript", slug: "javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", slug: "typescript", href: "https://www.typescriptlang.org/" },
    { name: "Vite", slug: "vite", href: "https://vitejs.dev/" },
    { name: "Webpack", slug: "webpack", href: "https://webpack.js.org/" },
    { name: "Rollup", slug: "rollupdotjs", href: "https://rollupjs.org/" },
    { name: "Astro", slug: "astro", href: "https://astro.build/" },

    // Backend / Runtime
    { name: "Node.js", slug: "nodedotjs", href: "https://nodejs.org/" },
    { name: "Express.js", slug: "express", href: "https://expressjs.com/" },
    { name: "NestJS", slug: "nestjs", href: "https://nestjs.com/" },
    { name: "Deno", slug: "deno", href: "https://deno.land/" },
    { name: "Python", slug: "python", href: "https://www.python.org/" },
    { name: "Django", slug: "django", href: "https://www.djangoproject.com/" },
    { name: "Flask", slug: "flask", href: "https://flask.palletsprojects.com/" },
    { name: "PHP", slug: "php", href: "https://www.php.net/" },
    { name: "Laravel", slug: "laravel", href: "https://laravel.com/" },
    { name: "WordPress", slug: "wordpress", href: "https://wordpress.org/" },

    // Databases & ORM
    { name: "PostgreSQL", slug: "postgresql", href: "https://www.postgresql.org/" },
    { name: "MySQL", slug: "mysql", href: "https://www.mysql.com/" },
    { name: "MongoDB", slug: "mongodb", href: "https://www.mongodb.com/" },
    { name: "Redis", slug: "redis", href: "https://redis.io/" },
    { name: "Prisma", slug: "prisma", href: "https://www.prisma.io/" },
    { name: "Sequelize", slug: "sequelize", href: "https://sequelize.org/" },

    // DevOps & Cloud
    { name: "Docker", slug: "docker", href: "https://www.docker.com/" },
    { name: "Kubernetes", slug: "kubernetes", href: "https://kubernetes.io/" },
    { name: "Nginx", slug: "nginx", href: "https://nginx.org/" },
    { name: "GCP", slug: "googlecloud", href: "https://cloud.google.com/" },
    { name: "Cloudflare", slug: "cloudflare", href: "https://www.cloudflare.com/" },
    { name: "Vercel", slug: "vercel", href: "https://vercel.com/" },
    { name: "Netlify", slug: "netlify", href: "https://www.netlify.com/" },

    // Tools & DX
    { name: "Git", slug: "git", href: "https://git-scm.com/" },
    { name: "GitLab", slug: "gitlab", href: "https://gitlab.com/" },
    { name: "GitHub Actions", slug: "githubactions", href: "https://github.com/features/actions" },
    { name: "Turborepo", slug: "turborepo", href: "https://turbo.build/" },
    { name: "NPM", slug: "npm", href: "https://www.npmjs.com/" },
    { name: "PNPM", slug: "pnpm", href: "https://pnpm.io/" },
    { name: "Yarn", slug: "yarn", href: "https://yarnpkg.com/" },
    { name: "ESLint", slug: "eslint", href: "https://eslint.org/" },
    { name: "Prettier", slug: "prettier", href: "https://prettier.io/" },
    { name: "Storybook", slug: "storybook", href: "https://storybook.js.org/" },
    { name: "Jest", slug: "jest", href: "https://jestjs.io/" },
    { name: "Vitest", slug: "vitest", href: "https://vitest.dev/" },
    { name: "Cypress", slug: "cypress", href: "https://www.cypress.io/" },
    { name: "GraphQL", slug: "graphql", href: "https://graphql.org/" },
    { name: "Telegram Bots", slug: "telegram", href: "https://core.telegram.org/bots" },
    { name: "Discord.js", slug: "discord", href: "https://discord.js.org/" },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
      <div className="mt-4 flex flex-wrap gap-3 sm:gap-4 sm:justify-center">
        {items.map((t) => (
          <a
            key={t.name}
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            data-chip
            className="tech-chip inline-flex cursor-pointer items-center !gap-3 rounded-lg border border-neutral-200/60 bg-white/50 !px-5 !py-2.5 !text-base font-medium text-[color:var(--foreground)] shadow-sm ring-1 ring-transparent transition duration-200 transition-colors hover:bg-black/5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 motion-reduce:transition-none dark:border-neutral-800 dark:bg-white/5 dark:hover:border-neutral-700 dark:hover:bg-white/10 whitespace-nowrap min-h-[40px]"
          >
            <img
              alt={`${t.name} logo`}
              loading="lazy"
              width={20}
              height={20}
              decoding="async"
              className="size-5 rounded shrink-0"
              src={`https://cdn.simpleicons.org/${t.slug}`}
              style={{ color: "transparent" }}
            />
            {t.name}
          </a>
        ))}
      </div>
    </>
  );
}
