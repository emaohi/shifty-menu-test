import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../quiz.service";
import {Quiz} from "../models/quiz";
import {Question} from "../models/question";
import {Answer} from "../models/answer";

@Component({
  selector: 'app-quiz-role-creator',
  templateUrl: './quiz-role-creator.component.html',
  styleUrls: ['./quiz-role-creator.component.css']
})
export class QuizRoleCreatorComponent implements OnInit {

  role : string;
  quiz: Quiz;

  newQuestion: Question;

  successMessage: string;
  errorMessage: string;

  errMsg: string;

  constructor(private route:ActivatedRoute, private quizService : QuizService){
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.resetQuestion();
      this.role = params['role'];
      this.get_specific_quiz();
    });
  }

  private get_specific_quiz() {
    this.quizService.getSpecificQuiz(this.role).subscribe(
      res => {
        this.quiz = Quiz.createFrom(res);
      },
      err => {
        if (err['status'] == 400) {
          console.error("Bad request Error: " + JSON.stringify(err));
          this.errMsg = err.error;
        } else {
          console.error("Unexpected Error: " + JSON.stringify(err));
        }
      }
    );
  }

  private set_answers_to_new_question() {
    let answers : Answer[] = [];
    for (let i=0; i < 4; i++){
      let answer : Answer = new Answer();
      answer.isAnswer = false;
      answer.selected = false;
      answers.push(answer);
    }
    this.newQuestion.answers = answers;
  }

  private setNewQuestion(quesId : number) {
    this.quiz.questions.forEach(q => {
      if (q.id == quesId){
        this.newQuestion = q;
      }
    });
  }

  private deleteQuestion(quesId : number) {
    this.quizService.deleteQuestion(quesId).subscribe(
      res => {
        this.setSuccessMessage("Question " + quesId + " has been deleted");
        this.resetPage();
      },
      err => {
        if (err['status'] == 400) {
          console.error("Bad request Error: " + JSON.stringify(err));
          this.setErrorMessage(err.error);
        } else {
          console.error("Unexpected Error: " + JSON.stringify(err));
          this.setErrorMessage(err.error);
        }
      }
    );
  }

  private updateBasicConfig() {
    this.quizService.submitBasicConf(this.quiz.id, this.quiz.name, this.quiz.time, this.quiz.scoreToPass).subscribe(
      res => {
        this.setSuccessMessage("Quiz updated");
      },
      err => {
        if (err['status'] == 400) {
          console.error("Bad request Error: " + JSON.stringify(err));
          this.setErrorMessage(err.error);
        } else {
          console.error("Unexpected Error: " + JSON.stringify(err));
          this.setErrorMessage(err.error);
        }
      }
    );
  }

  private updateQuestion() {
    if (this.newQuestion.id == null) {
      this.createQuestion();
    } else {
      this.updateQuestionsWithAnswers();
    }
  }

  private updateQuestionsWithAnswers() {
    this.quizService.updateQuestion(this.newQuestion, this.quiz.id).subscribe(
      res => {
        this.setSuccessMessage("Quiz updated");
        this.resetPage();
      },
      err => {
        if (err['status'] == 400) {
          console.error("Bad request Error: " + JSON.stringify(err));
          this.setErrorMessage(err.error);
        } else {
          console.error("Unexpected Error: " + JSON.stringify(err));
          this.setErrorMessage(err.error);
        }
      }
    );
  }

  private createQuestion() {
    this.quizService.createQuestion(this.newQuestion, this.quiz.id).subscribe(
      res => {
        this.newQuestion.id = res.question_id;
        console.log('new question id is ' + res.question_id);
        this.updateQuestionsWithAnswers();
      },
      err => {
        if (err['status'] == 400) {
          console.error("Bad request Error when creating question: " + JSON.stringify(err));
          this.setErrorMessage(err.error);
        } else {
          console.error("Unexpected Error: " + JSON.stringify(err));
          this.setErrorMessage(err.error);
        }
      }
    );
  }

  private resetQuestion() {
    this.newQuestion = new Question();
    this.set_answers_to_new_question();
  }

  private resetPage() {
    this.resetQuestion();
    this.get_specific_quiz();
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
