import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COVISART Advanced Technologies | NGS-360-3 Next Generation Simulator",
  description: "Discover the NGS-360-3, COVISART's cutting-edge Next Generation Simulator for defense and industrial applications.",
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
