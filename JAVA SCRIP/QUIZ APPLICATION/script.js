const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High-Level Text Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyper Text Multi Language", correct: false }
        ]
    },
    {
        question: "Which one of these is a JavaScript data type?",
        answers: [
            { text: "Number", correct: true },
            { text: "Integer", correct: false },
            { text: "Float", correct: false },
            { text: "Char", correct: false }
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        answers: [
            { text: "<script href='script.js'></script>", correct: false },
            { text: "<script src='script.js'></script>", correct: true },
            { text: "<script name='script.js'></script>", correct: false },
            { text: "<script file='script.js'></script>", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function startGame() {
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    document.getElementById('next-button').disabled = true;
    showQuestion(questions[currentQuestionIndex]);
    updateProgress();
}

function showQuestion(question) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerText = question.question;

    const answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        correctAnswersCount++;
        alert("Correct!");
    } else {
        alert("Wrong answer.");
    }

    const nextButton = document.getElementById('next-button');
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        document.getElementById('next-button').disabled = true;
        updateProgress();
    } else {
        showResult();
    }
}

function updateProgress() {
    const progress = document.getElementById('progress');
    progress.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function showResult() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>You got ${correctAnswersCount} out of ${questions.length} questions correct.</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
    document.getElementById('answer-buttons').innerHTML = '';
    document.getElementById('next-button').style.display = 'none';
}

function restartQuiz() {
    document.getElementById('next-button').style.display = 'inline-block';
    startGame();
}

startGame();
