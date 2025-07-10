export default function PageBanner({ title, subtitle, desc }) {
  return (
    <section className="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            {title}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {subtitle}
          </h2>
          <p className="text-xs md:text-sm xl:text-lg text-blue-100 max-w-3xl mx-auto">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
}
