export default function TargetAudienceSection() {
  return (
    <section className="bg-background-light py-14 md:py-20 lg:py-14">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 lg:px-12">
        <div className="text-center mb-12">
          {/* Headline */}
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-accent-green mb-4">
            A Gym Where You Belong, Not a Crowd You Avoid
          </h2>

          {/* Subheadline */}
          <h3 className="font-poppins font-normal text-2xl md:text-3xl text-text-dark mb-8">
            This Gym Is For You If:
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-10">
          {/* Left Column - Bullet Points */}
          <div>
            <ul className="space-y-4">
              <li className="flex items-start text-text-gray text-lg">
                <span className="text-accent-green mr-3 text-xl">•</span>
                <span>You feel intimidated in big commercial gyms/bro culture</span>
              </li>
              <li className="flex items-start text-text-gray text-lg">
                <span className="text-accent-green mr-3 text-xl">•</span>
                <span>You are anxious/nervous to walk into a gym</span>
              </li>
              <li className="flex items-start text-text-gray text-lg">
                <span className="text-accent-green mr-3 text-xl">•</span>
                <span>You've never lifted weights before</span>
              </li>
              <li className="flex items-start text-text-gray text-lg">
                <span className="text-accent-green mr-3 text-xl">•</span>
                <span>You want guidance and accountability</span>
              </li>
              <li className="flex items-start text-text-gray text-lg">
                <span className="text-accent-green mr-3 text-xl">•</span>
                <span>You don't want to fight for equipment</span>
              </li>
              <li className="flex items-start text-text-gray text-lg">
                <span className="text-accent-green mr-3 text-xl">•</span>
                <span>You prefer community over ego</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Badge */}
          <div className="flex items-center justify-center">
            <div className="bg-primary-green text-text-dark font-poppins font-semibold text-xl md:text-2xl px-8 py-6 rounded text-center">
              Limited Memberships<br />Are Available
            </div>
          </div>
        </div>

        {/* Additional Text */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-text-gray text-lg leading-relaxed mb-6">
            We keep memberships intentionally limited so you never have to fight for equipment or feel overwhelmed.
            When spots fill, we start a waitlist.
          </p>
          <p className="text-text-gray text-lg leading-relaxed mb-8">
            If you've been waiting for the right time to begin, this is it. Book your free intro before spots are gone.
          </p>

          {/* CTA Button */}
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[56px] bg-secondary-cream text-text-dark font-cantarell font-bold text-sm uppercase tracking-wider transition-colors hover:bg-primary-green"
          >
            BOOK YOUR FREE NO-PRESSURE INTRO
          </a>
        </div>
      </div>
    </section>
  );
}

