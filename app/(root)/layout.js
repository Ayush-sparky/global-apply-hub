import EducationFooter from "@/components/Footer";
import NavBar from "@/components/Navbar";

export default function SecondRootLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="pt-[76px] md:pt-[92px]">
        {children}
      </main>
      <EducationFooter />
    </>
  );
}
