import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Power Projects | Transformando Imposto em Impacto",
  description: "Da concepção à aprovação e execução. Projetos esportivos incentivados com autoridade técnica, segurança e zero improviso.",
  icons: {
    icon: "/assets/logos/logo-Apex-icone.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${raleway.variable} ${openSans.variable} h-full antialiased`}>
      <body className="min-h-full font-sans selection:bg-apex-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
