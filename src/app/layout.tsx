
import {Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Marquee from "./Components/Marquee/Marquee";


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
      <body className="">
        <Navbar />
        <Marquee />
        <div className="h-px w-full bg-gray-100" />
        {children}
        
        </body>
    </html>
  );
}
