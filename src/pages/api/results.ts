import { Question } from "@/contexts/context";
import { NextApiRequest, NextApiResponse } from "next";

// Define types for request and response bodies
type ResultsRequestBody = {
  questions: Question[];
  answers: string[];
};

type ResultsResponseBody = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultsResponseBody>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { questions, answers }: ResultsRequestBody = req.body;
  const result = questions.map(({ question }, ix) => ({
    question,
    answer: answers[ix],
  }));

  // Process the quiz results
  // db.save(result);
  console.log("API Results received", JSON.stringify(result));

  res.status(200).json({ success: true });
}
