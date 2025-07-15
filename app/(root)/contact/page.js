import CallNow from "@/components/cta_buttons/CallNow";
import EmailUs from "@/components/cta_buttons/EmailUs";
import PageBanner from "@/components/PageBanner";
import CTAsection from "@/components/sections_pages/CTAsection";

export const metadata = {
  title: 'Contact Us',
  description: 'Feel free to reach out to us anytime via call, email or message'
}

export default function ContactPage() {
  return (
    <div className=" bg-background">
      <PageBanner
        title="Contact us"
        subtitle="Your Global Education Journey Starts With One Conversation"
        desc="Have questions about studying abroad?
         Wondering which country or university fits your dreams?
          We're here to guide you every step of the way. 
          From choosing the perfect program to securing your visa,
           our expert consultants are ready to transform your aspirations into achievements.
            Don't let uncertainty hold you back – reach out today and
             let's craft your personalized roadmap to international education success."
      />
      <CTAsection
        title="Have any sort of queries in mind?"
        desc="Feel free to call us anytime when in doubt"
      >
        <EmailUs classProp='btn cta-btn cta-btn-secondary' />
        <CallNow classProp='btn cta-btn btn-primary' />
      </CTAsection>
    </div>
  );
}
