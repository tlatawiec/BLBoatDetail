import { DM_Sans } from "next/font/google";
import  Navbar  from "./Navbar";
import Footer from "./Footer";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.ico" sizes="any" />

      </head>

      <body className={dmsans.className}>

        <Navbar />
        {children}
        <Footer />

        </body>
    </html>
  );
}
