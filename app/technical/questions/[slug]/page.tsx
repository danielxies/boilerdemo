'use client';

import React from "react";
import { useParams } from "next/navigation";
import questionsData from "@/data/questions.json";
import DanielsEditor from "@/components/custom/DanielsEditor";

interface Question {
    title: string;
    number: number;
    difficulty: "Easy" | "Medium" | "Hard";
    slug: string;
    description: string;
    examples: string[];
    constraints: string[];
    starterCode: string;
    solution: string;
}

const QuestionPage: React.FC = () => {
    const params = useParams();
    const slug = params?.slug as string;
    const questionData = questionsData[slug as keyof typeof questionsData];

    if (!questionData) {
        console.error(`Question data not found for slug: ${slug}`);
        return <div className="min-h-screen bg-[#1a1a1a] pt-16 text-white">Question not found</div>;
    }

    const question: Question = {
        ...questionData,
        slug,
        difficulty: questionData.difficulty as "Easy" | "Medium" | "Hard",
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] pt-16">
            <div className="h-[calc(100vh-4rem)]">
                <DanielsEditor 
                    title={question.title}
                    description={question.description}
                    examples={question.examples}
                    constraints={question.constraints}
                    starterCode={question.starterCode}
                    questionNumber={question.number}
                    solution={question.solution}
                    difficulty={question.difficulty}
                />
            </div>
        </div>
    );
}

export default QuestionPage; 