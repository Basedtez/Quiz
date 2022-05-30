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