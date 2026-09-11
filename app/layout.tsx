import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aubrey Ragandan | Software Developer",
  description:
    "Portfolio of Aubrey Ragandan, a Computer Science graduate and aspiring software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}