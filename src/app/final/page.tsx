"use client";
import Button from "@/components/Button";
import { useQuestionContext } from "@/contexts/context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hello() {
  const { questions, answers } = useQuestionContext();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const sendResults = async () => {
      try {
        const response = await fetch("/api/results", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ questions, answers }),
        });
        if (!response.ok) {
          throw new Error("Failed to send results");
        }
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    sendResults();
  }, [questions, answers]);

  const handleClick = () => console.log("Back to Home");

  return (
    <>
      <Image
        src="/big-logo.png"
        alt="Max Mara Logo"
        className="lg:max-h-24"
        sizes="30vw"
        width={200}
        height={50}
      />

      <h3 className="text-xl">Thanks so much for playing!</h3>

      <p>
        {error
          ? "Sorry, something went wrong!"
          : "Want to try on your Icon Coat?"}
        <br />
        Please ask a client advisor for assistance
      </p>

      <Link href="/welcome">
        <Button onClick={handleClick}>Return to Home</Button>
      </Link>
    </>
  );
}
