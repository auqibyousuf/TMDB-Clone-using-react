import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const SourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={SourceSans3.className}>
      <body>
        <Header logo={{ imgUrl: "/images/logo.svg", imgAlt: "" }} />
        <section className="">{children}</section>
        <Footer logoSrc="/images/footer-logo.svg" />
      </body>
    </html>
  );
}
