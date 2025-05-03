"use client";

import Image from "next/image";
import { useRef } from "react";
import { Demo } from "@/components/ui/demo";
import { Waves } from "@/components/ui/waves-background";

export default function Home() {
  return (
    <>
      <div id="background" className="fixed top-0 left-0 w-full h-full z-[-1]">
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
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl rounded-xl shadow-xl overflow-hidden text-white">
          <div className="text-white text-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-xl relative">
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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-1">
                  Web Developer
                </h1>
                
                {/* Experience badges */}
                <div className="flex items-center justify-center mt-1 mb-6">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full font-semibold flex items-center shadow-md">
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
          <div className="bg-white/10 p-8">
            <h2 className="text-2xl font-bold mb-6 text-white text-center">About me</h2>
            <div className="text-white space-y-4 max-w-2xl mx-auto">
              <p>
                Full-stack developer with over 12 years of experience creating web applications for businesses. I specialize in React, Node.js, and modern JavaScript frameworks.
              </p>
              <p>
                I take pride in building robust, scalable applications with clean code and intuitive user interfaces. My goal is to create solutions that not only meet technical requirements but also provide an exceptional user experience.
              </p>
              <p>
                In addition to my technical skills, I have a strong background in project management and team leadership, allowing me to effectively coordinate development efforts and ensure successful delivery.
              </p>
            </div>

            {/* Key Skills */}
            <div className="mt-8 mb-6">
              <h2 className="text-2xl font-bold mb-8 text-white text-center">Key Skills</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                  <i className="fas fa-code text-4xl text-blue-500 mb-3"></i>
                  <span className="font-medium text-white">Full-stack Development</span>
                </div>
                <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                  <i className="fas fa-mobile-alt text-4xl text-green-500 mb-3"></i>
                  <span className="font-medium text-white">Responsive Design</span>
                </div>
                <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                  <i className="fas fa-plug text-4xl text-indigo-500 mb-3"></i>
                  <span className="font-medium text-white">API Development</span>
                </div>
                <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                  <i className="fas fa-pencil-ruler text-4xl text-purple-500 mb-3"></i>
                  <span className="font-medium text-white">UI/UX Design</span>
                </div>
                <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                  <i className="fas fa-users text-4xl text-yellow-500 mb-3"></i>
                  <span className="font-medium text-white">Team Leadership</span>
                </div>
                <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                  <i className="fas fa-tasks text-4xl text-red-500 mb-3"></i>
                  <span className="font-medium text-white">Project Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="p-8 bg-white/10">
            <h2 className="text-2xl font-bold mb-8 text-white text-center">Tech Stack</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {/* Frontend */}
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-react text-4xl text-blue-500 mb-3"></i>
                <span className="font-medium text-white">React</span>
              </div>
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-vuejs text-4xl text-green-500 mb-3"></i>
                <span className="font-medium text-white">Vue.js</span>
              </div>
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-js text-4xl text-yellow-500 mb-3"></i>
                <span className="font-medium text-white">JavaScript</span>
              </div>
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-angular text-4xl text-red-600 mb-3"></i>
                <span className="font-medium text-white">Angular</span>
              </div>

              {/* Backend & CMS */}
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-php text-4xl text-indigo-500 mb-3"></i>
                <span className="font-medium text-white">PHP</span>
              </div>
              <div className="rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-wordpress text-4xl text-blue-600 mb-3"></i>
                <span className="font-medium text-white">WordPress</span>
              </div>
              <div className="rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fas fa-shopping-cart text-4xl text-white mb-3"></i>
                <span className="font-medium text-white">Bitrix</span>
              </div>
              <div className="rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-node-js text-4xl text-green-600 mb-3"></i>
                <span className="font-medium text-white">Node.js</span>
              </div>
              
              {/* Python & Automation */}
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-python text-4xl text-blue-500 mb-3"></i>
                <span className="font-medium text-white">Python</span>
              </div>
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-telegram text-4xl text-[#0088cc] mb-3"></i>
                <span className="font-medium text-white">Telegram Bots</span>
              </div>
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fas fa-robot text-4xl text-purple-600 mb-3"></i>
                <span className="font-medium text-white">Aiogram</span>
              </div>
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fas fa-cogs text-4xl text-white mb-3"></i>
                <span className="font-medium text-white">Automation</span>
              </div>
              
              {/* Database & Tools */}
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fas fa-database text-4xl text-blue-400 mb-3"></i>
                <span className="font-medium text-white">MySQL</span>
              </div>
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fas fa-database text-4xl text-blue-700 mb-3"></i>
                <span className="font-medium text-white">MongoDB</span>
              </div>
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-docker text-4xl text-blue-500 mb-3"></i>
                <span className="font-medium text-white">Docker</span>
              </div>
              <div className="bg-white/10 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-laravel text-4xl text-red-500 mb-3"></i>
                <span className="font-medium text-white">Laravel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}