import { DM_Sans } from "next/font/google";
import  Navbar  from "./Navbar";
import Footer from "./Footer";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Brighton Boat Detail | Your Premier Boat Detailing Service in Barrington",
  description: "Transform your boat with Brighton Boat Detail! We offer top-notch detailing services to keep your vessel shining on the water. Serving Barrington, our expert team ensures your boat maintains its pristine condition. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>


      <body className={dmsans.className}>

        <Navbar />
        {children}
        <Footer />

        </body>
    </html>
  );
}
