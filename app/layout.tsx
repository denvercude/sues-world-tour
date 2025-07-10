import '../styles/globals.css';
import { Archivo_Black, Space_Grotesk } from "next/font/google";

export const metadata = {
  title: "Sue's World Tour Test",
  description: "Track Sue the T-Rex as she travels the world.",
};

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

// Note: Find a video explaining the syntax of this functional component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} ${space.variable}`}>
        {children}
      </body>
    </html>
  );
}