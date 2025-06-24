import NavBar from "@/components/Navbar";

export default function SecondRootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
