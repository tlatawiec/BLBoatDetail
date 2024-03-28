import { Rubik } from "next/font/google";
import  Navbar  from "./components/Navbar"
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Brighton Boat Detail | Your Premier Boat Detailing Service in Barrington",
  description: "Transform your boat with Brighton Boat Detail! We offer top-notch detailing services to keep your vessel shining on the water. Serving Barrington, our expert team ensures your boat maintains its pristine condition. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div>
          <h1 className="text-center mt-10 mb-0 text-2xl">Brighton's Boat Detail</h1>

          <Navbar />
        </div>

        {children}
        </body>
    </html>
  );
}
