"use client";

import Image from "next/image";
import { Waves } from "@/components/ui/waves-background";

export default function Home() {
  return (
    <>
      {/* Глобальные стили применяются через CSS файлы */}
      
      {/* Фон с волнами на весь экран */}
      <div className="fixed inset-0 -z-10 overflow-hidden w-screen h-screen" id="waves-background">
        <Waves 
          lineColor="rgba(0, 114, 255, 0.2)"
          backgroundColor="#000000"
          waveSpeedX={0.0125}
          waveSpeedY={0.005}
          waveAmpX={32}
          waveAmpY={16}
          friction={0.925}
          tension={0.005}
          maxCursorMove={100}
          xGap={10}
          yGap={32}
        />
      </div>
      <div className="min-h-screen h-full flex flex-col items-center justify-center p-4 z-10 relative">
        <div className="w-full max-w-4xl rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] bg-black border-blue-500 text-white mx-auto">
          <div className="text-white text-center bg-gradient-to-r from-blue-800 to-blue-900 rounded-t-xl relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
            
            {/* Profile section with improved layout */}
            <div className="flex flex-col md:flex-row items-center md:justify-between max-w-3xl mx-auto">
              {/* Profile image with animation */}
              <div className="relative mb-6 md:mb-0 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative p-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Profile" 
                    width={140} 
                    height={140} 
                    className="rounded-full border-2 border-white shadow-lg object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              
              {/* Info and contact section */}
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-4xl font-bold text-white mb-1 drop-shadow-md">
                  Web Developer
                </h1>
                
                {/* Experience badges */}
                <div className="flex items-center justify-center mt-1 mb-6">
                  <div className="bg-blue-800 text-white px-4 py-1 rounded-full font-semibold flex items-center shadow-md">
                    <span className="mr-2">12+</span>
                    <div className="h-6 w-px bg-blue-300"></div>
                    <span className="ml-2">years of experience</span>
                  </div>
                </div>
                
                {/* Simple contact icons with maximum spacing - optimized for all screens */}
                <div className="mt-6 mb-4">
                  <div className="flex justify-center gap-10 items-center w-full max-w-xs mx-auto">
                    <a href="https://t.me/+79781643792" className="contact-link">
                      <i className="fab fa-telegram-plane text-[#229ED9]"></i>
                    </a>
                    <a href="https://github.com/p8e3" className="contact-link">
                      <i className="fab fa-github text-white"></i>
                    </a>
                    <a href="mailto:vlasov.stas.web@gmail.com" className="contact-link">
                      <i className="far fa-envelope text-[#F87171]"></i>
                    </a>
                    <a href="tel:+79781643792" className="contact-link">
                      <i className="fas fa-phone-alt text-[#34D399]"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Add custom CSS for animations and tooltips */}
            <style jsx>{`
              .contact-link {
                @apply transition-transform duration-200 ease-in-out p-1;
                padding: 0 15px;
                font-size: 2rem;
              }
              
              @media (max-width: 640px) {
                .contact-link {
                  font-size: 1.75rem;
                  padding: 0.5rem;
                }
              }
              
              .contact-link:hover {
                transform: translateY(-2px);
              }
            `}</style>
          </div>
          
          {/* Rest of the content remains the same */}
          <div className="bg-black p-8 rounded-b-xl">
            <h2 className="text-3xl font-bold mb-6 text-blue-300 text-center shadow-[0_0_15px_rgba(59,130,246,0.7)]">About me</h2>
            <div className="text-blue-100 font-medium space-y-6 max-w-2xl mx-auto">
              <p className="text-xl bg-black p-4 border-blue-500 text-cyan-200 font-semibold shadow-[0_0_15px_rgba(0,0,0,0.8)]" style={{textShadow: '0 0 5px rgba(6, 182, 212, 0.5)'}}>
                Full-stack developer with over 12 years of experience. I professionally work with React, Vue.js, Node.js, and Angular to create modern web applications of any complexity.
              </p>
              <p className="text-xl bg-black p-4 border-blue-500 text-cyan-200 font-semibold shadow-[0_0_15px_rgba(0,0,0,0.8)]" style={{textShadow: '0 0 5px rgba(6, 182, 212, 0.5)'}}>
                I have deep expertise in backend development using Node.js, PHP, and Python. I successfully work with MongoDB and MySQL databases, and implement Docker to optimize development and deployment processes.
              </p>
              <p className="text-xl bg-black p-4 border-blue-500 text-cyan-200 font-semibold shadow-[0_0_15px_rgba(0,0,0,0.8)]" style={{textShadow: '0 0 5px rgba(6, 182, 212, 0.5)'}}>
                My specialized expertise includes developing Telegram bots using Aiogram and integrating automated solutions for businesses. I possess strong skills in team leadership and project management, which allows me to successfully achieve set goals.
              </p>
            </div>

            {/* Key Skills */}
            <div className="mt-12 mb-8">
              <h2 className="text-3xl font-bold mb-8 text-blue-300 text-center shadow-[0_0_15px_rgba(59,130,246,0.7)]">Key Skills</h2>
              <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
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
          </div>

          {/* Tech Stack */}
          <div className="p-8 bg-black border-t-2 border-blue-600">
            <h2 className="text-3xl font-bold mb-8 text-blue-300 text-center shadow-[0_0_15px_rgba(59,130,246,0.7)]">Tech Stack</h2>
            
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
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
        </div>
      </div>
    </>
  );
}