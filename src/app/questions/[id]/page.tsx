"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import PageIndex from "@/components/PageIndex";
import { useState } from "react";
import { Question, useQuestionContext } from "@/contexts/context";

export default function Questions({params}: {params: { id: string }}) {

  const id = typeof params?.id === 'string' ? parseInt(params.id, 10) : 0;
  const index = id -1;
  const { questions, answers, setAnswer } = useQuestionContext();


  

  // const options = ["Playful & Creative", "Classic & Thoughful", "Glamorous & confident"];
  const { options, question } = questions[index];
  const handleClick = (option: string) => {
    setAnswer(index, option);
  }

  const nextPage = id < questions.length ? `/questions/${id +1}` : '/final';

  return (
    <>
      <Image
        src="/big-logo.png"
        alt="Max Mara Logo"
        className="lg:max-h-10"
        sizes="30vw"
        width={100}
        height={20}
      />

      <PageIndex index={id} total={questions.length} />

      <h3 className="text-xl">{question}</h3>

      <div className="min-h-48 flex flex-col items-center text-center justify-between">
      {options.map((text: string) => (
        <Button key={text} onClick={() => handleClick(text)} toggle={answers[index] === text}>{text}</Button>
      ))}
      </div>


      <div className="h-4">
        {answers[index] && answers[index] !== '' ? (
          <Link href={nextPage} className="animate-fade-in delay-500 transition ease-in-out hover:scale-105 ">
            <Button key={'next'} onClick={() => console.log(`Selected: ${answers[index]}`)}>Continue</Button>
          </Link>

        ) : ''}
      </div>
    </>
  );
}
