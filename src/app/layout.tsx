import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import MainContent from "@/components/MainContent";
import ChildComponent from "@/components/MainContent";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/context/ModalContext";

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
