export default function CTAsection({ children, title, desc }) {
  return (
    <div className="text-center mt-16">
      <div className="card p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className=" mb-8 max-w-2xl mx-auto">{desc} </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
