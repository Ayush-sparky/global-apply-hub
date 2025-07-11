import {
  GraduationCap,
  StampIcon as Passport,
  DollarSign,
  BookOpen,
  Plane,
  FileCheck,
  BookOpenCheck,
  FileCheck2,
} from "lucide-react";

export const services = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Student Profiling",
    desc: "At Global ApplyHub Network, we provide free counselling sessions to help you accomplish all your overseas study goals. We assist you in identifying the career path that is best for you, ensuring your journey is as smooth as possible – built on trust and confidence",
    checkList: [
      { title: "Academic profile assessment" },
      { title: "University shortlisting" },
      { title: "Course selection guidance" },
      { title: "Career pathway planning" },
    ],
    link: "/contact",
  },
  {
    icon: <BookOpenCheck className="h-8 w-8" />,
    title: "Test Preparation and Test Centre",
    desc: "We also help students prepare for the English Language Tests needed for admission to colleges and universities in the United Kingdom and Australia. All students must pass standard tests like IELTS, TOEFL, GMAT, GRE, SAT, PTE and OET according to the requirements set by the respective academic institutions.",
    checkList: [
      { title: "Statement of Purpose writing" },
      { title: "Document preparation & verification" },
      { title: "Application form completion" },
      { title: "Deadline management" },
    ],
    link: "/contact",
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: "Document Verification",
    desc: "Expert educational consultants at Global ApplyHub Network will carefully review and verify all documents provided by students. Incomplete or incorrect documentation may lead to delays or even rejection of your visa application, so we ensure everything is in perfect order before submission",
    checkList: [
      { title: "Visa document checklist" },
      { title: "Interview preparation" },
      { title: "Application submission" },
      { title: "Status tracking & updates" },
    ],
    link: "/visa",
  },
  {
    icon: <FileCheck2 className="h-8 w-8" />,
    title: "Application Review and Submission",
    desc: "We understand that applying to overseas colleges and universities is a pivotal decision that requires a lot of planning, research, and decision-making. It is not simply about filling in an application form.",
    checkList: [
      { title: "Scholarship identification" },
      { title: "Application assistance" },
      { title: "Financial planning" },
      { title: "Education loan guidance" },
    ],
    link: "/contact",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Interview Preparation",
    desc: "Global ApplyHub Network’s expert study abroad consultants understand that interviews are a vital part of the admission process. That’s why our experienced professionals are dedicated to thoroughly preparing prospective international students with proven interview techniques and personalized guidance.",
    checkList: [
      { title: "IELTS/TOEFL preparation" },
      { title: "GRE/GMAT coaching" },
      { title: "SAT/ACT preparation" },
      { title: "Mock tests & practice sessions" },
    ],
    link: "/contact",
  },
  {
    icon: <Passport className="h-8 w-8" />,
    title: "Visa Assistance",
    desc: "Our experts provide you with free consultation and assistance on visa conditions and requirements for your new journey. We will make sure that it is stress-free for you when making your visa application and that you are well prepared.",
    checkList: [
      { title: "Accommodation assistance" },
      { title: "Travel & flight booking" },
      { title: "Orientation sessions" },
      { title: "Cultural preparation" },
    ],
    link: "/contact",
  },
];
