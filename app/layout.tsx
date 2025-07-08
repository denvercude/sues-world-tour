import './globals.css';

export const metadata = {
  title: "Sue's World Tour Test",
  description: "Track Sue the T-Rex as she travels the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}