import PageBanner from "@/components/PageBanner";

export const metadata = {
    title: 'Universities',
    description: 'In partnership with universites all over the seas'
}

export default function UniversityPage() {
  return (
    <div>
      <PageBanner
        title="Universities"
        desc="From initial consultation and university selection to visa
              assistance and career guidance, our dedicated team is here to
              support you at every step. Trust us to provide personalized
              solutions tailored to your unique aspirations, helping you
              navigate the complexities of international education and make
              informed decisions that shape your future."
        subtitle="We are partnered with universites all around the world providing multiple choices for students"
      />
    </div>
  );
}
