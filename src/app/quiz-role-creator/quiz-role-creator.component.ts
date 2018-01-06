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

  errMsg: string;

  constructor(private route:ActivatedRoute, private quizService : QuizService){
    this.newQuestion = new Question();
  }

  ngOnInit() {
    this.role = this.route.snapshot.paramMap.get('role');
    this.get_specific_quiz(this.role);
    this.set_answers_to_new_question();
  }

  private get_specific_quiz(role) {
    this.quizService.getSpecificQuiz(role).subscribe(
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

  private setNewQuestion(ques : Question) {
    this.newQuestion = ques;
  }
}
