"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && backgroundRef.current) {
      // @ts-expect-error - VANTA is loaded from external script
      const vantaEffect = window.VANTA.WAVES({
        el: backgroundRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0072ff,
        shininess: 35.00,
        waveHeight: 20.00,
        waveSpeed: 0.75,
        zoom: 0.85
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  return (
    <>
      <div id="background" ref={backgroundRef} className="fixed top-0 left-0 w-full h-full z-[-1]"></div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-90 w-full max-w-4xl rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 text-center">
            <div className="relative inline-block mb-6">
              <Image 
                src="/images/profile.jpg" 
                alt="Profile" 
                width={120} 
                height={120} 
                className="rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text mb-2">
              Web Developer
            </h1>
            
            <div className="inline-block px-3 py-1 rounded-full text-sm text-gray-600 bg-blue-50 border border-blue-100 mb-6">
              <i className="far fa-clock mr-2"></i> 12+ years experience
            </div>
            
            {/* Contact icons */}
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://t.me/+79781643792" className="text-[#0088cc] hover:scale-110 transition-transform">
                <i className="fab fa-telegram text-3xl"></i>
              </a>
              <a href="https://github.com/p8e3" className="text-gray-700 hover:scale-110 transition-transform">
                <i className="fab fa-github text-3xl"></i>
              </a>
              <a href="mailto:vlasov.stas.web@gmail.com" className="text-red-500 hover:scale-110 transition-transform">
                <i className="far fa-envelope text-3xl"></i>
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">About me</h2>
            <div className="text-gray-700 space-y-4 max-w-2xl mx-auto">
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
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Key Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Full-stack Development</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Responsive Design</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">API Development</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">UI/UX Design</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Team Leadership</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Project Management</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Tech Stack</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {/* Frontend */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-react text-4xl text-blue-500 mb-3"></i>
                <span className="font-medium text-gray-700">React</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-js text-4xl text-yellow-500 mb-3"></i>
                <span className="font-medium text-gray-700">JavaScript</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-html5 text-4xl text-orange-500 mb-3"></i>
                <span className="font-medium text-gray-700">HTML5</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-css3-alt text-4xl text-blue-600 mb-3"></i>
                <span className="font-medium text-gray-700">CSS3</span>
              </div>

              {/* Backend */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fab fa-node-js text-4xl text-green-600 mb-3"></i>
                <span className="font-medium text-gray-700">Node.js</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fas fa-server text-4xl text-purple-500 mb-3"></i>
                <span className="font-medium text-gray-700">Express</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fas fa-database text-4xl text-blue-700 mb-3"></i>
                <span className="font-medium text-gray-700">MongoDB</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform hover:shadow-lg">
                <i className="fas fa-database text-4xl text-blue-400 mb-3"></i>
                <span className="font-medium text-gray-700">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
