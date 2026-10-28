import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Bhambale | AI + Full Stack Developer",
  description: "Portfolio of Gaurav Bhambale — building practical AI tools and full-stack web applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
