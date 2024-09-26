import { Niramit } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav"

const niramit = Niramit({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: "PIBPP",
  description: "Só Jesus Cristo salva sua vida!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${niramit.className} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
