export default function KeySkillsSection() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-300 text-center shadow-[0_0_15px_rgba(59,130,246,0.7)]">Key Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <div className="bg-blue-900/80 rounded-lg border border-blue-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-blue-800/90 hover:shadow-blue-700/30 hover:shadow-xl">
          <i className="fas fa-code text-3xl text-blue-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Full-stack Development</span>
        </div>
        <div className="bg-green-900/80 rounded-lg border border-green-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-green-800/90 hover:shadow-green-700/30 hover:shadow-xl">
          <i className="fas fa-mobile-alt text-3xl text-green-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Responsive Design</span>
        </div>
        <div className="bg-indigo-900/80 rounded-lg border border-indigo-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-indigo-800/90 hover:shadow-indigo-700/30 hover:shadow-xl">
          <i className="fas fa-plug text-3xl text-indigo-300 mb-2"></i>
          <span className="font-semibold text-white text-center">API Development</span>
        </div>
        <div className="bg-purple-900/80 rounded-lg border border-purple-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-purple-800/90 hover:shadow-purple-700/30 hover:shadow-xl">
          <i className="fas fa-pencil-ruler text-3xl text-purple-300 mb-2"></i>
          <span className="font-semibold text-white text-center">UI/UX Design</span>
        </div>
        <div className="bg-yellow-900/80 rounded-lg border border-yellow-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-yellow-800/90 hover:shadow-yellow-700/30 hover:shadow-xl">
          <i className="fas fa-users text-3xl text-yellow-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Team Leadership</span>
        </div>
        <div className="bg-red-900/80 rounded-lg border border-red-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-red-800/90 hover:shadow-red-700/30 hover:shadow-xl">
          <i className="fas fa-tasks text-3xl text-red-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Project Management</span>
        </div>
      </div>
    </div>
  );
}
