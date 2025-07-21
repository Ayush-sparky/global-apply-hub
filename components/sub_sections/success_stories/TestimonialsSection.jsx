import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection({ testimonials }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Hear directly from students about their experience working with
            EduGlobal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
