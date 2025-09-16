import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="w-full max-w-4xl rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.2)] border-blue-500 mx-auto overflow-hidden">
      <div className="text-white text-center bg-gradient-to-r from-blue-800 to-blue-900 relative p-6">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>

        {/* Profile section with improved layout */}
        <div className="flex flex-col md:flex-row items-center md:justify-between max-w-3xl mx-auto gap-6">
          {/* Profile image with animation */}
          <div className="relative group">
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

            {/* Simple contact icons */}
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

        <style jsx>{`
          .contact-link {
            padding: 0 15px;
            font-size: 2rem;
            transition: transform 200ms ease-in-out;
          }
          @media (max-width: 640px) {
            .contact-link { font-size: 1.75rem; padding: 0.5rem; }
          }
          .contact-link:hover { transform: translateY(-2px); }
        `}</style>
      </div>
    </div>
  );
}
