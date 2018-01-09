import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../models/question";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  @Input() question: Question;

  @Output() emitQuestion: EventEmitter<any> = new EventEmitter();

  showAnswers: boolean;

  constructor() {this.showAnswers = false;}

  ngOnInit() {
  }

  showQuestion() {
    this.emitQuestion.emit(this.question.id);
  }

  toggleAnswers() {
    this.showAnswers = !this.showAnswers;
  }

}
