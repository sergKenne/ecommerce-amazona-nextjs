import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

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
        <div className="wrapper">
          <main>
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}
