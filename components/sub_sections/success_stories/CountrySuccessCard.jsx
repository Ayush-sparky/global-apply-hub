// components/CountrySuccessCard.jsx
export function CountrySuccessCard({ country }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md text-center">
      <div className="text-4xl mb-4">{country.flag}</div>
      <h3 className="text-xl font-bold mb-2">
        {country.country}
      </h3>
      <div className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">
        {country.students}
      </div>
      <div className="text-sm text-foreground/70 mb-4">Students Placed</div>
      <div>
        <h4 className="font-semibold mb-2">Top Universities</h4>
        <div className="space-y-1">
          {country.topUnis.map((uni) => (
            <div key={uni} className="text-sm text-foreground/70">
              {uni}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}