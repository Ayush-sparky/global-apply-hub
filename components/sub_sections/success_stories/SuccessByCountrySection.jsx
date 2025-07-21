// components/SuccessByCountrySection.jsx
import { CountrySuccessCard } from "./CountrySuccessCard";

export function SuccessByCountrySection({ countries }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Success Across the Globe
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Our students have gained admission to top universities in major
            study destinations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <CountrySuccessCard key={country.country} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}
