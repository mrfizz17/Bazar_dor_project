import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Marquee from "./Components/Marquee/Marquee";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "sonner";

const NotoSans = Noto_Sans_Bengali({
  subsets: ["bengali"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${NotoSans.className} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-[#F0F5F0] min-h-screen flex flex-col">
        <Navbar />
        <Marquee />
        <div className="h-px w-full bg-gray-100" />
        <div className="max-w-6xl w-full mx-auto px-5 mt-7 mb-7 flex-1">
          {children}
          <Toaster position="top-center" duration={3000} richColors={false} />
        </div>
        <Footer />
      </body>
    </html>
  );
}
