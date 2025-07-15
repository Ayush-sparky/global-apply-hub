import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "About Us",
  description: "We are Nepal's top Foreign Eduaction Consultancy",
};

export default function AboutPage() {
  return (
    <div className=" bg-background">
      <PageBanner
        title="About us"
        subtitle="We are Nepal's no.1 consultancy"
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
