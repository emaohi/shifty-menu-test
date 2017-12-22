import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "./models/question";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {Quiz} from "./models/quiz";
import {CookieService} from "ngx-cookie-service";




@Injectable()
export class QuizService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "X-CSRFToken": this.getCookie('csrftoken') })
  };
  private menuUrl = 'menu/test';  // URL to web api

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  /** GET Quiz */
  getQuiz (): Observable<Quiz> {
    return this.http.get<Quiz>(this.menuUrl + '/get_quiz');
  }

  /** GET Questions */
  getQuestions (): Observable<Question[]> {
    return this.http.get<Question[]>(this.menuUrl + '/questions');
  }

  submitQuiz (quiz: Quiz): Observable<string> {
    // httpOptions['headers'].append("X-CSRFToken", this.getCookie('csrftoken'));
    // httpOptions['headers'].append("blabla", 'blabla');
    return this.http.post<string>(this.menuUrl + '/submit/', quiz, this.httpOptions);
  }

  getCookie(key: string) : string {
    let cookie : string = this.cookieService.get(key);
    console.log('got ' + key + 'cookie: ' + cookie);
    return cookie;
  }

}
