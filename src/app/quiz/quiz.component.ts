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

  mode = 'quiz';


  constructor(private quizService: QuizService) { }

  ngOnInit() : void {
    this.loadQuiz();
  }

  loadQuiz() : void {
    this.quizService.getQuiz().subscribe(
      res => {
        this.quiz = new Quiz(res);
        this.count = this.quiz.questions.length;
    },
      err => {
        console.error("Error: " + err.message);
      }
    );
  }

  getCurrQuestion() : Question {
    return this.quiz.questions[this.currIndex];
  }

  onSelect() {
      this.goTo(this.currIndex + 1);
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
