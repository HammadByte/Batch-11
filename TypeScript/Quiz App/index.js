var questions = [
    {
        question: "Which element is block level element?",
        answers: ["<heading>", "<h>", "<div>", "<br>"],
        correctAnswer: "<div>",
    },
    {
        question: "What are the three main 'simple types' in TypeScript?",
        answers: ["Object, String, Number", "Array, Object, Boolean", "Object, Array, Symbol", "Boolean, Number, String  "],
        correctAnswer: "Boolean, Number, String  ",
    },
    {
        question: "What type of assignment is this variable, `const fullName: string = 'Hammad Nizam';`?",
        answers: ["true", "false", "explicit", "implicit"],
        correctAnswer: "explicit",
    },
    {
        question: "True or False: TypeScript can always correctly infer a variables type.",
        answers: ["true", "false", "both", "not on this"],
        correctAnswer: "false",
    },
    {
        question: "You can disable implicit variable type assignment by enabling the compiler option:",
        answers: ["noAutoType", "noImplicitAny ", "autoTypeAssignment = FALSE", "Implicit = FALSE  "],
        correctAnswer: "noImplicitAny ",
    },
    // Add more questions here
];
var currentQuestionIndex = 0;
var timerInterval;
var timeLeft = 300; // 5 minutes in seconds
var questionTextElement = document.getElementById("question-text");
var answerButtonsElement = document.getElementById("answer-buttons");
var nextButtonElement = document.getElementById("next-button");
var timerElement = document.getElementById("timer");
function startGame() {
    currentQuestionIndex = 0;
    nextButtonElement.classList.add("hide");
    startTimer();
    showQuestion(questions[currentQuestionIndex]);
}
function startTimer() {
    timerInterval = setInterval(function () {
        timeLeft--;
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;
        timerElement.innerText = "Time Left: ".concat(minutes.toString().padStart(2, '0'), ":").concat(seconds.toString().padStart(2, '0'));
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up! Quiz Finished!');
            endQuiz();
        }
    }, 1000);
}
function showQuestion(question) {
    questionTextElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(function (answer) {
        var button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn-option');
        button.addEventListener('click', function () { return selectAnswer(answer); });
        answerButtonsElement.appendChild(button);
    });
}
function selectAnswer(selectedAnswer) {
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        alert('Correct!');
    }
    else {
        alert('Incorrect!');
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        nextButtonElement.classList.remove('hide');
    }
    else {
        alert('Quiz Finished!');
        endQuiz();
    }
}
function endQuiz() {
    nextButtonElement.classList.add('hide');
    // Additional logic to end the quiz can be added here
}
nextButtonElement.addEventListener('click', function () {
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButtonElement.classList.add('hide');
    }
});
startGame();
