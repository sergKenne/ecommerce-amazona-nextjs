import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import SvgSprites from "@/svgSprites/SvgSprites";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Amazona Ecommerce",
  description: "Ecommerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SvgSprites/>
        <div className="wrapper">
          <Header />
          <main className="container">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}
