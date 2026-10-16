
import {Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

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

        {children}
        
        </body>
    </html>
  );
}
