// app/layout.js
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

export const metadata = {
  title: "¿A qué hora juega Racing? | Próximos partidos y resultados",
  description: "Consultá el próximo partido de Racing Club: fecha, hora, rival, estadio y contador regresivo.",
  icons: {
    icon: "/escudo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${bebasNeue.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

