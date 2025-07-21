import { Star } from "lucide-react";

export function StarRating({ rating, showText = true }) {
  return (
    <div className="flex items-center">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
      {showText && <span className="ml-2 dark:text-foreground/70">({rating}/5)</span>}
    </div>
  );
}
