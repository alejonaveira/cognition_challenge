import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
      <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/welcome">Welcome</Link>
      </li>
      <li>
        <Link href="/questions">Questions</Link>
      </li>
      <li>
        <Link href="/final">Final</Link>
      </li>
    </ul>
      </div>

    </main>
  );
}
