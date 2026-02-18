export default function IntroSection() {
  return (
    <section className="bg-background-light py-14 md:py-20 lg:py-14">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark mb-8">
            What to Expect at Your Free Intro Tour
          </h2>

          {/* Bullet Points */}
          <ul className="text-left max-w-xl mx-auto space-y-4 mb-10">
            <li className="flex items-start text-text-gray text-lg">
              <span className="text-accent-green mr-3 text-xl">•</span>
              <span>No workouts — just a friendly walk-through</span>
            </li>
            <li className="flex items-start text-text-gray text-lg">
              <span className="text-accent-green mr-3 text-xl">•</span>
              <span>Meet a coach & ask questions</span>
            </li>
            <li className="flex items-start text-text-gray text-lg">
              <span className="text-accent-green mr-3 text-xl">•</span>
              <span>See the space at your pace</span>
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[56px] bg-secondary-cream text-text-dark font-cantarell font-bold text-sm uppercase tracking-wider transition-colors hover:bg-primary-green"
          >
            Book Your Free No-Pressure Intro
          </a>
        </div>
      </div>
    </section>
  );
}

