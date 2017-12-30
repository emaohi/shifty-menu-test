import { Component, OnInit } from '@angular/core';
import {Quiz} from "../models/quiz";
import {QuizService} from "../quiz.service";

@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.css']
})
export class QuizCreatorComponent implements OnInit {

  newQuiz: Quiz;

  existingQuizzes : Quiz[];

  successMessage: string;
  errorMessage: string;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  private getEvents(): void {
    this.quizService.getQuizzes().subscribe(
      res => {

      },
      err => {

      }
    )
  }

  private getQuizCnt(): string {
    return this.existingQuizzes.length.toString();
  }

  private setSuccessMessage(msg: string): void {
    this.successMessage = msg;
    setTimeout(() => this.successMessage = "", 3000);
  }
  private setErrorMessage(msg: string): void {
    this.errorMessage = msg;
    setTimeout(() => this.errorMessage = "", 3000);
  }

}
