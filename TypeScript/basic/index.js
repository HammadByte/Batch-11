// quiz.ts
// Define the quiz questions and answers
var quizQuestions = [
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
function displayQuiz(questions) {
    questions.forEach(function (question, index) {
        console.log("Question ".concat(index + 1, ": ").concat(question.questionText));
        question.answers.forEach(function (answer, i) {
            console.log("  ".concat(i + 1, ". ").concat(answer.text));
        });
    });
}
// Function to check answers
function checkAnswers(questions, userAnswers) {
    var score = 0;
    questions.forEach(function (question, index) {
        var _a;
        var selectedAnswerIndex = userAnswers[index];
        if ((_a = question.answers[selectedAnswerIndex]) === null || _a === void 0 ? void 0 : _a.isCorrect) {
            score++;
        }
    });
    return score;
}
// Display the quiz
displayQuiz(quizQuestions);
// Example user answers (0-based index)
var userAnswers = [2, 1]; // User selects the third answer for the first question and second for the second question
// Check answers and display score
var score = checkAnswers(quizQuestions, userAnswers);
console.log("Your score is: ".concat(score, " out of ").concat(quizQuestions.length));
