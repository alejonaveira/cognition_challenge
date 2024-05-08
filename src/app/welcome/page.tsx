"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import coat from "../../../public/game-intro.gif";
import { useQuestionContext } from "@/contexts/context";

export default function Welcome() {

  const { reset } = useQuestionContext();
  
  const handleClick = () => reset();

  return (
    <>
      <Image
        src="/big-logo.png"
        alt="Max Mara Logo"
        className="lg:max-h-24"
        sizes="30vw"
        width={200}
        height={100}
      />

      <p className="animate-fade-in delay-500">Discover the <br/>
      Max Mara Icon Coat <br/>
      that bests fits your style</p>

      <Image
        src={coat}
        alt="Max Mara Icon Coat"
        className="lg:max-h-80 animate-fade-in duration-1000"
        sizes="80vw"
        style={{
          width: "auto",
          height: "auto",
        }}
      />


      <p>Play for a chance to win<br/>
      a Max Mara Icon Coat</p>

      <Link href="/questions/1">
        <Button onClick={handleClick}>Play Now</Button>
      </Link>
    </>
  );
}
