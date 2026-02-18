import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-kettle-bells.jpg"
          alt="Gym background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full px-6 md:px-12 lg:px-12 py-12">
        <div className="flex flex-col h-full">
          {/* Logo and Brand - Top Left */}
          <div className="flex items-center gap-8 mb-auto">
            <Image
              src="/icon.png"
              alt="Vi Gym Logo"
              width={208}
              height={208}
              className="w-16 h-16 md:w-44 md:h-44 lg:w-52 lg:h-52"
              priority
              unoptimized
            />
            <div className="text-left hidden md:block">
              <div className="text-white text-3xl lg:text-4xl font-poppins font-light tracking-wide">
                Your Neighbourhood
              </div>
              <div className="text-white text-8xl lg:text-9xl font-serif font-light tracking-widest">
                G Y M
              </div>
            </div>
          </div>

          {/* Main Content - Centered */}
          <div className="flex flex-col items-center justify-center text-center flex-grow">
            {/* Main Headline - 30% smaller */}
            <h1 className="font-poppins font-normal text-white text-2xl md:text-4xl lg:text-5xl mb-4 max-w-4xl leading-tight">
              A Gym for People Who Feel Intimidated by Gyms
            </h1>

            {/* Subheadline */}
            <p className="text-white text-base md:text-lg mb-8 font-cantarell">
              Memberships are capped to keep it calm and comfortable
            </p>

            {/* CTA Button - 50% bigger, pill-shaped, transparent with border */}
            <a
              href="/book"
              className="inline-flex items-center justify-center px-12 py-6 min-h-[84px] bg-transparent border-2 border-white text-white font-cantarell font-bold text-lg uppercase tracking-wider rounded-full transition-all hover:bg-[#76C46C] hover:text-white hover:border-[#76C46C]"
            >
              Book Your Free No-Pressure Intro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

