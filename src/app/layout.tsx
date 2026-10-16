
import {Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Marquee from "./Components/Marquee/Marquee";
import Footer from "./Components/Footer/Footer";


const NotoSans = Noto_Sans_Bengali({
  subsets: ["bengali"],
});



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${NotoSans.className} h-full antialiased`}
    >
      <body className="bg-[#F0F5F0]">
        <Navbar />
        <Marquee />
        <div className="h-px w-full bg-gray-100" />
        <div className="max-w-6xl mx-auto px-5 mt-7 mb-7 ">
        {children}

        </div>
        <Footer />
        
        </body>
    </html>
  );
}
