// quiz.ts

// Define interfaces for questions and answers
interface Answer {
    text: string;
    isCorrect: boolean;
}

interface Question {
    questionText: string;
    answers: Answer[];
}

// Define the quiz questions and answers
const quizQuestions: Question[] = [
    {
        questionText: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', isCorrect: false },
            { text: 'Madrid', isCorrect: false },
            { text: 'Paris', isCorrect: true },
            { text: 'Rome', isCorrect: false }
        ]
    },
    {
        questionText: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', isCorrect: false },
            { text: 'Mars', isCorrect: true },
            { text: 'Jupiter', isCorrect: false },
            { text: 'Saturn', isCorrect: false }
        ]
    }
];

// Function to display the quiz
function displayQuiz(questions: Question[]) {
    questions.forEach((question, index) => {
        console.log(`Question ${index + 1}: ${question.questionText}`);
        question.answers.forEach((answer, i) => {
            console.log(`  ${i + 1}. ${answer.text}`);
        });
    });
}

// Function to check answers
function checkAnswers(questions: Question[], userAnswers: number[]) {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedAnswerIndex = userAnswers[index];
        if (question.answers[selectedAnswerIndex]?.isCorrect) {
            score++;
        }
    });
    return score;
}

// Display the quiz
displayQuiz(quizQuestions);

// Example user answers (0-based index)
const userAnswers = [2, 1]; // User selects the third answer for the first question and second for the second question

// Check answers and display score
const score = checkAnswers(quizQuestions, userAnswers);
console.log(`Your score is: ${score} out of ${quizQuestions.length}`);
