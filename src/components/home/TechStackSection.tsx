export default function TechStackSection() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-300 text-center shadow-[0_0_15px_rgba(59,130,246,0.7)]">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {/* Frontend */}
        <div className="bg-blue-900/80 rounded-lg border border-blue-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-blue-800/90 hover:shadow-blue-700/30 hover:shadow-xl">
          <i className="fab fa-react text-3xl text-blue-300 mb-2"></i>
          <span className="font-semibold text-white text-center">React</span>
        </div>
        <div className="bg-green-900/80 rounded-lg border border-green-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-green-800/90 hover:shadow-green-700/30 hover:shadow-xl">
          <i className="fab fa-vuejs text-3xl text-green-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Vue.js</span>
        </div>
        <div className="bg-yellow-900/80 rounded-lg border border-yellow-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-yellow-800/90 hover:shadow-yellow-700/30 hover:shadow-xl">
          <i className="fab fa-js text-3xl text-yellow-300 mb-2"></i>
          <span className="font-semibold text-white text-center">JavaScript</span>
        </div>
        <div className="bg-red-900/80 rounded-lg border border-red-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-red-800/90 hover:shadow-red-700/30 hover:shadow-xl">
          <i className="fab fa-angular text-3xl text-red-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Angular</span>
        </div>

        {/* Backend & CMS */}
        <div className="bg-indigo-900/80 rounded-lg border border-indigo-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-indigo-800/90 hover:shadow-indigo-700/30 hover:shadow-xl">
          <i className="fab fa-php text-3xl text-indigo-300 mb-2"></i>
          <span className="font-semibold text-white text-center">PHP</span>
        </div>
        <div className="bg-blue-900/80 rounded-lg border border-blue-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-blue-800/90 hover:shadow-blue-700/30 hover:shadow-xl">
          <i className="fab fa-wordpress text-3xl text-blue-300 mb-2"></i>
          <span className="font-semibold text-white text-center">WordPress</span>
        </div>
        <div className="bg-orange-900/80 rounded-lg border border-orange-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-orange-800/90 hover:shadow-orange-700/30 hover:shadow-xl">
          <i className="fas fa-shopping-cart text-3xl text-orange-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Bitrix</span>
        </div>
        <div className="bg-green-900/80 rounded-lg border border-green-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-green-800/90 hover:shadow-green-700/30 hover:shadow-xl">
          <i className="fab fa-node-js text-3xl text-green-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Node.js</span>
        </div>
        
        {/* Python & Automation */}
        <div className="bg-blue-900/80 rounded-lg border border-blue-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-blue-800/90 hover:shadow-blue-700/30 hover:shadow-xl">
          <i className="fab fa-python text-3xl text-blue-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Python</span>
        </div>
        <div className="bg-cyan-900/80 rounded-lg border border-cyan-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-cyan-800/90 hover:shadow-cyan-700/30 hover:shadow-xl">
          <i className="fab fa-telegram text-3xl text-cyan-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Telegram Bots</span>
        </div>
        <div className="bg-purple-900/80 rounded-lg border border-purple-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-purple-800/90 hover:shadow-purple-700/30 hover:shadow-xl">
          <i className="fas fa-robot text-3xl text-purple-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Aiogram</span>
        </div>
        <div className="bg-gray-900/80 rounded-lg border border-gray-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-gray-800/90 hover:shadow-gray-700/30 hover:shadow-xl">
          <i className="fas fa-cogs text-3xl text-gray-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Automation</span>
        </div>
        
        {/* Database & Tools */}
        <div className="bg-blue-900/80 rounded-lg border border-blue-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-blue-800/90 hover:shadow-blue-700/30 hover:shadow-xl">
          <i className="fas fa-database text-3xl text-blue-300 mb-2"></i>
          <span className="font-semibold text-white text-center">MySQL</span>
        </div>
        <div className="bg-green-900/80 rounded-lg border border-green-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-green-800/90 hover:shadow-green-700/30 hover:shadow-xl">
          <i className="fas fa-database text-3xl text-green-300 mb-2"></i>
          <span className="font-semibold text-white text-center">MongoDB</span>
        </div>
        <div className="bg-blue-900/80 rounded-lg border border-blue-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-blue-800/90 hover:shadow-blue-700/30 hover:shadow-xl">
          <i className="fab fa-docker text-3xl text-blue-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Docker</span>
        </div>
        <div className="bg-red-900/80 rounded-lg border border-red-700 shadow-lg p-4 h-[120px] flex flex-col items-center justify-center transition-all hover:bg-red-800/90 hover:shadow-red-700/30 hover:shadow-xl">
          <i className="fab fa-laravel text-3xl text-red-300 mb-2"></i>
          <span className="font-semibold text-white text-center">Laravel</span>
        </div>
      </div>
    </div>
  );
}
