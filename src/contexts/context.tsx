'use client';

import { createContext, useContext, useEffect, useState } from "react";

export type Question = {
  question: string;
  options: Array<string>;
};

type QuestionContextType = {
  questions: Question[];
  answers: string[];
  setAnswer: (index: number, answer: string) => void;
  reset: () => void;
};

export const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error(
      "useQuestionContext must be used within a QuestionProvider"
    );
  }
  return context;
};

export const QuestionProvider = ({ children }) => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  // Load questions from JSON file on initial render
  useEffect(() => {
    // Fetch questions from JSON file
    const fetchQuestions = async () => {
      const res = await fetch("/questions.json");
      const data = await res.json();
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  const setAnswer = (index: number, answer: string) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  const reset = () => {
    setAnswers([]);
  }

  return (
    <QuestionContext.Provider value={{questions, answers, setAnswer, reset}}>
      {children}
    </QuestionContext.Provider>
  );
};
