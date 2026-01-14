import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Visa Programs",
  description:
    "From Visa consultancy to acceptance we provide you with structured guidance and support",
};

export default function VisaPage() {
  return (
    <div className=" bg-background">
      <PageBanner
        title="Visa Programs"
        subtitle="Making your student visa process clear, confident, and successful"
        desc="From initial consultation and university selection to visa
              assistance and career guidance, our dedicated team is here to
              support you at every step. Trust us to provide personalized
              solutions tailored to your unique aspirations, helping you
              navigate the complexities of international education and make
              informed decisions that shape your future."
      />
    </div>
  );
}
