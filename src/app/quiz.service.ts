import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "./models/question";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {Quiz} from "./models/quiz";

@Injectable()
export class QuizService {

  private menuUrl = 'menu/test';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET Quiz */
  getQuiz (): Observable<Quiz> {
    return this.http.get<Quiz>(this.menuUrl + '/1');
  }

  /** GET Questions */
  getQuestions (): Observable<Question[]> {
    return this.http.get<Question[]>(this.menuUrl + '/questions');
  }

}
