import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from "../models/quiz";
import {Question} from "../models/question";

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.css']
})
export class QuizReviewComponent implements OnInit {

  @Input() quiz: Quiz;
  @Output() showQuestion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isAnswered(question: Question) : boolean {
    return !!question.answers.find(x => x.selected);
  };

  gotoQuestion(questionId: number): void {
    console.log(questionId);
    this.showQuestion.emit(questionId);
  }

}
