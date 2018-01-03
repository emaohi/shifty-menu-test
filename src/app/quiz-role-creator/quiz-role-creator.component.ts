import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../quiz.service";
import {Quiz} from "../models/quiz";

@Component({
  selector: 'app-quiz-role-creator',
  templateUrl: './quiz-role-creator.component.html',
  styleUrls: ['./quiz-role-creator.component.css']
})
export class QuizRoleCreatorComponent implements OnInit {

  role : string;
  quiz: Quiz;

  constructor(private route:ActivatedRoute, private quizService : QuizService){}

  ngOnInit() {
    this.role = this.route.snapshot.paramMap.get('role');
    this.get_specific_quiz();
  }

  private get_specific_quiz() {
    this.quizService.getQuiz().subscribe(
      res => {
        this.quiz = Quiz.createFrom(res);
        console.log(JSON.stringify(this.quiz));
      },
      err => {
        if (err['status'] == 400) {
          console.error("Bad request Error: " + JSON.stringify(err));
        } else {
          console.error("Unexpected Error: " + JSON.stringify(err));
        }
      }
    );
  }

}
