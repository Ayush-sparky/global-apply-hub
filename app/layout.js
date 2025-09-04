import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopBtn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata = {
  title: {
    template: "Global ApplyHub | %s",
    default: "Global ApplyHub",
  },
  description: "Your final destination for international education",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} dark`}
    >
      <body className={inter.className}>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
