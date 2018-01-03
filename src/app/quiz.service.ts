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

  getQuiz (): Observable<Quiz> {
    return this.http.get<Quiz>(this.menuUrl + '/get_quiz/');
  }

  getSpecificQuiz (role : string): Observable<Quiz> {
    return this.http.get<Quiz>(this.menuUrl + '/get_specific_quiz/' + role + '/');
  }

  getQuestions (): Observable<Question[]> {
    return this.http.get<Question[]>(this.menuUrl + '/questions/');
  }

  submitQuiz (quiz: Quiz): Observable<any> {
    return this.http.post<any>(this.menuUrl + '/submit/', quiz, this.httpOptions);
  }

  getRetryStatus (): Observable<any> {
    return this.http.get<any>(this.menuUrl + '/ask_retry_quiz/');
  }

  askForRetry (): Observable<any> {
    return this.http.post<any>(this.menuUrl + '/ask_retry_quiz/', {}, this.httpOptions);
  }

  doRetry (): Observable<any> {
    return this.http.post<any>(this.menuUrl + '/retry_quiz/', {}, this.httpOptions);
  }

  getCookie(key: string) : string {
    let cookie : string = this.cookieService.get(key);
    console.log('got ' + key + ' cookie: ' + cookie);
    return cookie;
  }

  getQuizzes() {
    return this.http.get<any>(this.menuUrl + '/get_quizzes/')
  }

  create(quiz: Quiz) {

  }

  delete(id: number) {

  }

  update(id: number, quiz: Quiz) {

  }
}
