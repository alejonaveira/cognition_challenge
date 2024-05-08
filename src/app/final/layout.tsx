import type { Metadata } from "next";

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
    <main className="h-screen p-10 bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(/background-final-small.jpg)` }}>
      <div className="container mx-auto border border-white h-full">
        <div className="h-1/3 flex flex-col items-center text-center justify-around">{children}</div>
      </div>
    </main>
  );
}
