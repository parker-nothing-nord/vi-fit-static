import FinalCTA from "@/components/FinalCTA";
import BookingForm from "@/components/BookingForm";

export default function BookPage() {
  return (
    <main>
      <FinalCTA />
      <section className="bg-background-light py-16 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <BookingForm />
        </div>
      </section>
    </main>
  );
}

