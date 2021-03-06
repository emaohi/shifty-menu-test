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
  retryStatus: string;
  isPreview: boolean;

  mode = 'quiz';


  constructor(private quizService: QuizService) { }

  ngOnInit() : void {
    this.loadQuiz();
  }

  loadQuiz() : void {
    this.quizService.getQuiz().subscribe(
      res => {
        console.log(JSON.stringify(res));
        this.isPreview = res['is_preview'];
        this.quiz = Quiz.createFrom(res);
        console.log(JSON.stringify(this.quiz));
        this.count = this.quiz.questions.length;
    },
      err => {
        console.error("Error: " + JSON.stringify(err));
        if (err['status'] == 400) {
          this.errMsg = err.error;
          this.getRetryStatus();
        } else if (err['status'] == 503) {
          this.errMsg = "There is no quiz of this role yet.... but you can create one :)";
          this.isPreview = true;
        } else {
          this.errMsg = "Failed to load quiz: " + err.error;
        }
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

  getRetryStatus() {
    this.quizService.getRetryStatus().subscribe(
      res => {
        console.log('retry status is ' + JSON.stringify(res));
        this.retryStatus = res.retry_status;
      },
      err => {
        console.error('failed to get retry status: ' + JSON.stringify(err));
      }
    )
  }

  askRetry() {
    this.quizService.askForRetry().subscribe(
      res => {
        console.log('retry ask response is: ' + res.created);
        location.reload();
      },
      err => {
        console.error('failed to ask for retry: ' + JSON.stringify(err));
      }
    )
  }

  retryQuiz () {
    this.quizService.doRetry().subscribe(
      res => {
        console.log('do retry response is: ' + res.created);
        location.reload();
      },
      err => {
        console.error('failed to do retry: ' + JSON.stringify(err));
      }
    )
  }
}
