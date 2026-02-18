export default function ProblemSection() {
  return (
    <section className="bg-background-cream py-14 md:py-20 lg:py-14">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-accent-green mb-6">
            Escape Modern Gym Culture
          </h2>

          {/* Subheadline */}
          <h3 className="font-poppins font-normal text-2xl md:text-3xl lg:text-4xl text-text-dark mb-10">
            You're Not Lazy. You're Just Tired of Feeling Uncomfortable!
          </h3>

          {/* Bullet Points */}
          <ul className="text-left max-w-2xl mx-auto space-y-4 mb-10">
            <li className="flex items-start text-text-gray text-lg">
              <span className="text-accent-green mr-3 text-xl">•</span>
              <span>You've walked into big gyms and felt judged</span>
            </li>
            <li className="flex items-start text-text-gray text-lg">
              <span className="text-accent-green mr-3 text-xl">•</span>
              <span>You don't know where to start with weights</span>
            </li>
            <li className="flex items-start text-text-gray text-lg">
              <span className="text-accent-green mr-3 text-xl">•</span>
              <span>You worry you're "doing it wrong"</span>
            </li>
            <li className="flex items-start text-text-gray text-lg">
              <span className="text-accent-green mr-3 text-xl">•</span>
              <span>You want results, but you also want support</span>
            </li>
            <li className="flex items-start text-text-gray text-lg">
              <span className="text-accent-green mr-3 text-xl">•</span>
              <span>You're overwhelmed with life and don't have time to "figure it out" on your own</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

