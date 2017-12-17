import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../models/quiz";
import {Question} from "../models/question";

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.css']
})
export class QuizReviewComponent implements OnInit {

  @Input() quiz: Quiz;

  constructor() { }

  ngOnInit() {
  }

  isAnswered(question: Question) {
    return question.answers.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

}
