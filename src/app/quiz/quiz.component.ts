import { Component, OnInit } from '@angular/core';
import {Quiz} from "../models/quiz";
import {QuizService} from "../quiz.service";
import {Question} from "../models/question";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz: Quiz;
  currIndex: number = 0;
  count: number;

  roles = ['Waiter', 'Bartender', 'Cook'];

  errMsg: string;

  mode = 'quiz';


  constructor(private quizService: QuizService) { }

  ngOnInit() : void {
    this.loadQuiz();
  }

  loadQuiz() : void {
    this.quizService.getQuiz().subscribe(
      res => {
        console.log(JSON.stringify(res));
        this.quiz = new Quiz(res);
        console.log(JSON.stringify(this.quiz));
        this.count = this.quiz.questions.length;
    },
      err => {
        console.error("Error: " + JSON.stringify(err));
        this.errMsg = "Bad request: " + err.error;
      }
    );
  }

  getCurrQuestion() : Question {
    return this.quiz.questions[this.currIndex];
  }

  goTo(index: number) {
    if (index >= 0 && index < this.count) {
      this.currIndex = index;
    }
  }

  showQuestion(id: number) : void {
    this.mode = 'quiz';
    this.goTo(id);
  }

}
