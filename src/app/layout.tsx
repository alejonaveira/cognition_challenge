import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { QuestionProvider } from "@/contexts/context";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Mara Icon Coat",
  description: "Discover the Max Mara Icon Coat that best fits your style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className + " uppercase animate-fade-in"}>
        <QuestionProvider>
          {children}
        </QuestionProvider>
      </body>
    </html>
  );
}
