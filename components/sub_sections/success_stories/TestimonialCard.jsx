import { StarRating } from "./StarRating";

export function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-card p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <StarRating rating={testimonial.rating} showText={false} />
      </div>
      <p className="text-foreground/70 mb-6 italic leading-relaxed">
        "{testimonial.text}"
      </p>
      <div className="border-t pt-4">
        <div className="font-semibold">{testimonial.name}</div>
        <div className="text-sm text-foreground/70">{testimonial.program}</div>
        <div className="text-sm text-blue-600 dark:text-blue-300 font-medium">
          {testimonial.university}
        </div>
      </div>
    </div>
  );
}
