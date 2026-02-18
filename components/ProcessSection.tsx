export default function ProcessSection() {
  return (
    <section className="bg-background-cream py-14 md:py-20 lg:py-14">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 lg:px-12">
        <div className="text-center mb-12">
          {/* Headline */}
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">
            No sales pressure. Just a friendly walkthrough and plan.
          </h2>

          {/* Subheadline */}
          <h3 className="font-poppins font-normal text-xl md:text-2xl text-accent-green mb-8">
            What Is The Next Step?
          </h3>

          <p className="font-poppins text-lg text-text-gray mb-12">
            What Happens After You Click "Book"
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Step 1 */}
          <div className="text-center">
            <h4 className="font-poppins font-semibold text-xl md:text-2xl text-accent-green mb-4 uppercase tracking-wide">
              STEP 1: BOOK YOUR FREE INTRO
            </h4>
            <ul className="text-left space-y-3 max-w-sm mx-auto">
              <li className="flex items-start text-text-gray">
                <span className="text-accent-green mr-2">•</span>
                <span>You choose a time that works for you</span>
              </li>
              <li className="flex items-start text-text-gray">
                <span className="text-accent-green mr-2">•</span>
                <span>We show you around (no sales pressure)</span>
              </li>
              <li className="flex items-start text-text-gray">
                <span className="text-accent-green mr-2">•</span>
                <span>No workouts. No pressure. Just a friendly walkthrough</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <h4 className="font-poppins font-semibold text-xl md:text-2xl text-accent-green mb-4 uppercase tracking-wide">
              STEP 2: GET YOUR CUSTOM PLAN
            </h4>
            <ul className="text-left space-y-3 max-w-sm mx-auto">
              <li className="flex items-start text-text-gray">
                <span className="text-accent-green mr-2">•</span>
                <span>We learn your goals and concerns</span>
              </li>
              <li className="flex items-start text-text-gray">
                <span className="text-accent-green mr-2">•</span>
                <span>We assess your goals and experience</span>
              </li>
              <li className="flex items-start text-text-gray">
                <span className="text-accent-green mr-2">•</span>
                <span>We design something beginner-friendly</span>
              </li>
              <li className="flex items-start text-text-gray">
                <span className="text-accent-green mr-2">•</span>
                <span>We recommend your starting path</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <h4 className="font-poppins font-semibold text-xl md:text-2xl text-accent-green mb-4 uppercase tracking-wide">
              STEP 3: START WITH SUPPORT
            </h4>
            <ul className="text-left space-y-3 max-w-sm mx-auto">
              <li className="flex items-start text-text-gray">
                <span className="text-accent-green mr-2">•</span>
                <span>Weekly check-ins. No confusion. No overwhelm.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
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

