import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutHome } from "@/features/home/components/layout-home";
// import { LayoutBussiness } from "@/features/home/components/layout-bussiness";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Noticias Perú',
  description:
    'Noticias de los principales diarios de Perú: El Comercio, La República y Gestión.',
  icons: {
    icon: 'favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={""} >
        <LayoutHome>
          {/* <LayoutBussiness> */}
          {children}
          {/* </LayoutBussiness> */}
        </LayoutHome>
      </body>
    </html>
  );
}
