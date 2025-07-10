import {
  GraduationCap,
  FileText,
  StampIcon as Passport,
  DollarSign,
  BookOpen,
  Plane,
} from "lucide-react";

export const services = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "University Selection & Counseling",
    desc: "Personalized university matching based on your academic profile, career goals, budget, and preferences. We help you choose the right institution from our network of 500+ partner universities.",
    checkList: [
      { title: "Academic profile assessment" },
      { title: "University shortlisting" },
      { title: "Course selection guidance" },
      { title: "Career pathway planning" },
    ],
    link: "/contact",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Application Assistance",
    desc: "Complete application support including document preparation, SOP writing, recommendation letters, and application submission management to maximize your admission chances.",
    checkList: [
      { title: "Statement of Purpose writing" },
      { title: "Document preparation & verification" },
      { title: "Application form completion" },
      { title: "Deadline management" },
    ],
    link: "/contact",
  },
  {
    icon: <Passport className="h-8 w-8" />,
    title: "Student Visa Processing",
    desc: "Expert visa guidance with 98% success rate. We handle all aspects of visa processing including document preparation, interview coaching, and application tracking.",
    checkList: [
      { title: "Visa document checklist" },
      { title: "Interview preparation" },
      { title: "Application submission" },
      { title: "Status tracking & updates" },
    ],
    link: "/visa",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Scholarship & Financial Aid",
    desc: "Comprehensive scholarship guidance to help reduce your education costs. We've helped students secure over $50M in scholarships and financial aid.",
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
    title: "Test Preparation",
    desc: "Comprehensive test preparation for IELTS, TOEFL, GRE, GMAT, SAT, and other standardized tests with expert trainers and proven study materials.",
    checkList: [
      { title: "IELTS/TOEFL preparation" },
      { title: "GRE/GMAT coaching" },
      { title: "SAT/ACT preparation" },
      { title: "Mock tests & practice sessions" },
    ],
    link: "/contact",
  },
  {
    icon: <Plane className="h-8 w-8" />,
    title: "Pre-departure Support",
    desc: "Comprehensive pre-departure assistance including accommodation arrangements, travel guidance, orientation sessions, and cultural preparation to ensure a smooth transition.",
    checkList: [
      { title: "Accommodation assistance" },
      { title: "Travel & flight booking" },
      { title: "Orientation sessions" },
      { title: "Cultural preparation" },
    ],
    link: "/contact",
  },
];
