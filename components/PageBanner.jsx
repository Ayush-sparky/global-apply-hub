export default function PageBanner({ title, subtitle, desc }) {
  return (
    <section className="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {title}
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">
            {subtitle}
          </h2>
          <p className="text-xs lg:text-sm max-w-3xl mx-auto">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
}
