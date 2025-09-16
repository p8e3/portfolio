export default function AboutSection() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.12)] border-t-2 border-blue-600 p-8" style={{ backgroundColor: 'transparent', color: 'var(--foreground)' }}>
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--foreground)' }}>About me</h2>
      <div className="font-medium space-y-6 max-w-2xl mx-auto">
        <p className="text-xl p-4 font-semibold" style={{textShadow: '0 0 5px rgba(6, 182, 212, 0.25)'}}>
          Full-stack developer with over 12 years of experience. I professionally work with React, Vue.js, Node.js, and Angular to create modern web applications of any complexity.
        </p>
        <p className="text-xl p-4 font-semibold" style={{textShadow: '0 0 5px rgba(6, 182, 212, 0.25)'}}>
          I have deep expertise in backend development using Node.js, PHP, and Python. I successfully work with MongoDB and MySQL databases, and implement Docker to optimize development and deployment processes.
        </p>
        <p className="text-xl p-4 font-semibold" style={{textShadow: '0 0 5px rgba(6, 182, 212, 0.25)'}}>
          My specialized expertise includes developing Telegram bots using Aiogram and integrating automated solutions for businesses. I possess strong skills in team leadership and project management, which allows me to successfully achieve set goals.
        </p>
      </div>
    </div>
  );
}
