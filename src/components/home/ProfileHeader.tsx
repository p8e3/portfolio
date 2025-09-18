import Image from "next/image";

export default function ProfileHeader() {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-6">
        {/* Profile image (perfect circle) */}
        <div className="relative group flex-shrink-0">
          <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden">
            <Image 
              src="/images/profile.jpg" 
              alt="Profile" 
              fill
              className="object-cover"
              sizes="140px"
            />
          </div>
        </div>

        {/* Info and contact section */}
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-1">
            Stanislav Vlasov
          </h1>

          {/* Experience text */}
          <div className="flex items-center justify-center md:justify-start mt-1 mb-6 opacity-80">
            <span>12+ years of experience</span>
          </div>

          {/* Contact icons */}
          <div className="mt-4 mb-2">
            <div className="flex justify-center gap-8 items-center">
              <a href="https://t.me/+79781643792" className="text-2xl sm:text-3xl hover:-translate-y-1 transition-transform duration-200">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href="https://github.com/p8e3" className="text-2xl sm:text-3xl hover:-translate-y-1 transition-transform duration-200">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:vlasov.stas.web@gmail.com" className="text-2xl sm:text-3xl hover:-translate-y-1 transition-transform duration-200">
                <i className="far fa-envelope"></i>
              </a>
              <a href="tel:+79781643792" className="text-2xl sm:text-3xl hover:-translate-y-1 transition-transform duration-200">
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
