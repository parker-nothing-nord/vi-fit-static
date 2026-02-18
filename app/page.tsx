import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <section className="bg-background-light py-14 md:py-20 lg:py-14">
        <div className="max-w-[1160px] mx-auto px-6 md:px-12 lg:px-12">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-accent-green mb-8 text-center">
            Come Find Us Here
          </h2>
          <div className="mb-6">
            <Map />
          </div>
        </div>
      </section>
    </main>
  );
}

