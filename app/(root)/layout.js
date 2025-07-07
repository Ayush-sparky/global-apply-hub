import EducationFooter from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ToggleDarkContext";

export default function SecondRootLayout({ children }) {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <main className="pt-[76px] md:pt-[92px]">{children}</main>
        <EducationFooter />
      </ThemeProvider>
    </>
  );
}
