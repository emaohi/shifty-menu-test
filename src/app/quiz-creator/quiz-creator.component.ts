import { Component, OnInit } from '@angular/core';
import {Quiz} from "../models/quiz";
import {QuizService} from "../quiz.service";
import {Role} from "../models/role";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.css']
})
export class QuizCreatorComponent implements OnInit {

  businessName: string = '';
  roles: Role[];

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.getQuizzes();
  }

  private getQuizzes(): void {
    this.quizService.getQuizzes().subscribe(
      res => {
        this.businessName = res['businessName'];
        this.roles = res['roles']
      },
      err => {
        console.error("Error: " + JSON.stringify(err));
      }
    )
  }

  // private gotoQuiz(roleName){
  //   console.log('gotoQuiz' + roleName);
  //   this.router.navigate(['create', roleName]);
  // }

}
