// Bismillahirahmanirahim



import { Inter } from "next/font/google";
import "./globals.css";
import BrandExample from "./components/navbar";
import Bingeh from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Genç Ortağım",
  description: "Yemek Sipariş Verme Uygulaması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={inter.className}>
      
      <BrandExample/>  {children} <Bingeh/>
      </body>
    </html>
  );
}
