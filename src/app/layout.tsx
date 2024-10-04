import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
// import ChildComponent from "@/components/MainContent";
import { ModalProvider } from "@/context/ModalContext";
import dynamic from "next/dynamic";
const ChildComponent = dynamic(() => import("@/components/MainContent"));

const font = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "auto",
  variable: "--font-portfolios",
});

export const metadata: Metadata = {
  openGraph: {
    title: "Home - Than phourac",
    description: "Your front-end developer",
  },
  title: "Home",
  description: "Your front-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable}`}>
        <ModalProvider>
          <ChildComponent>{children}</ChildComponent>
        </ModalProvider>
      </body>
    </html>
  );
}
