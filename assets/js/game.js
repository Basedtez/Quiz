// setting up quiz
class Quiz {
    constructor(question) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    
    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    selected(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
    isEnded() {
        return this.questionIndex === this.questions.length;
    }
    
}
// creating question class and function
class Questions {
    constructor(text, options, answer) {
        this.text = text;
        this.options = options;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

function displayQuestions() {
    if (quiz.isEnded()) {
        showScores();
    }else {
        
        let questionElement =document.getElementById("questions");
        questionElement.innerHTML = quiz.getQuestionIndex().text;
        let options = quiz.getQuestionIndex().options;
        for (let i = 0; i < options.length; i++) {
            let optionsElement = document.getElementById("option" + i);
            optionsElement.innerHTML = options[i];
            selected("btn" + i, options[i]);
        }

        showProgress();
    }
};

function selected(id, selected) {
    let button = document.getElementById(id);
    button.onclick = function(); {
        quiz.selected(selected);
        displayQuestions();
    }
    
}

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("quiz-prog")
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.Questions.length} `;
}

// question score count
function showScores() {
    let quizEndHTML =
    `
        <h1>Quiz completed</h1>
        <h2 id="score">Your results: ${quiz.score} of ${quiz.question.length} </h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>
        
        </div>

    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;    
}
