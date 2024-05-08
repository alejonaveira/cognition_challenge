export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="h-screen p-10 bg-repeat"
      style={{ backgroundImage: `url(/background-small.png)` }}
    >
      <div className="container mx-auto border border-white min-h-full flex flex-col items-center text-center justify-evenly md:py-10 lg:p-18">
        {children}
      </div>
    </main>
  );
}
