export default function CTAsection({ children, title, desc }) {
  return (
    <section className="py-8 lg:py-10 mt-8 xl:mt-16 bg-cta text-white">
      <div className="p-8 md:p-12 max-w-4xl mx-auto flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl xl:text-4xl text-center  font-bold mb-4">{title}</h3>
        <p className=" mb-8 max-w-2xl text-center text-sm xl:text-[16px] text-gray-300 mx-auto">{desc} </p>
        <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 justify-center">
          {children}
        </div>
      </div>
    </section>
  );
}
