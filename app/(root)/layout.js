import EducationFooter from "@/components/Footer";
import NavBar from "@/components/Navbar";

export default function SecondRootLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className=" min-h-screen max-w-7xl mx-auto pt-[76px] md:pt-[100px]">
        {children}
      </main>
      <EducationFooter />
    </>
  );
}
