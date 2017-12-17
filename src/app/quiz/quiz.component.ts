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
  currQuestion: Question;
  currIndex: number = 0;

  mode = 'quiz';


  constructor(private quizService: QuizService) { }

  ngOnInit() : void {
    this.loadQuiz();
  }

  loadQuiz() : void {
    this.quizService.getQuiz().subscribe(
      res => {
        this.quiz = new Quiz(res);
        this.setCurrQuestion();
    },
      err => {
        console.error("Error: " + err.message);
      }
    );
  }

  setCurrQuestion() : void {
    this.currQuestion = this.quiz.questions[this.currIndex];
  }

}
