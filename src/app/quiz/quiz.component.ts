import { Component, OnInit } from '@angular/core';
import {Quiz} from "../models/quiz";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz: Quiz;

  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.loadQuiz();
  }

  loadQuiz() {
    this.quizService.get().subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
    });
  }

}
