import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../quiz.service";

@Component({
  selector: 'app-quiz-role-creator',
  templateUrl: './quiz-role-creator.component.html',
  styleUrls: ['./quiz-role-creator.component.css']
})
export class QuizRoleCreatorComponent implements OnInit {

  constructor(private route:ActivatedRoute, private quizService : QuizService){}

  ngOnInit() {
    let role = this.route.snapshot.paramMap.get('role');
    this.quizService.getQuiz()
  }

}
