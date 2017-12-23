import {Component, Input, OnInit} from '@angular/core';
import {QuizService} from "../quiz.service";
import {Quiz} from "../models/quiz";
import {Question} from "../models/question";
import {Answer} from "../models/answer";

@Component({
  selector: 'app-quiz-submit',
  templateUrl: './quiz-submit.component.html',
  styleUrls: ['./quiz-submit.component.css']
})
export class QuizSubmitComponent implements OnInit {

  @Input() quiz : Quiz;

  @Input() result : any;

  constructor() {
  }


  ngOnInit() {}

  isCorrect(question : Question) {
    let correctAnswerId : number = this.result[question.id];
    let submittedAnswerId : number = this.getSubmittedAnswerId(question.answers);
    if (!submittedAnswerId) {
      return null;
    }
    return correctAnswerId == submittedAnswerId;
  }


  private getSubmittedAnswerId(answers: Answer[]) {
    let submittedId : number;
    answers.forEach(a => {
      if (a.selected) {
        submittedId = a.id;
      }
    });
    return submittedId ? submittedId : null;
  }

  correctAnswer(question : Question) : string {
    let correctAnswerId : number = this.result[question.id];
    let correctAnswerText : string;
    question.answers.forEach(a => {
      if (a.id == correctAnswerId) {
        correctAnswerText = a.name;
      }
    });
    return correctAnswerText;
  }

  selectedAnswer(question: Question) : string{
    let name: string;
    question.answers.forEach(a => {
      if (a.selected) {
        name = a.name;
      }
    });
    return name ? name: "not answered";
  }

  isPassed() : boolean{
    return this.result['score'] >= this.quiz.scoreToPass;
  }
}
