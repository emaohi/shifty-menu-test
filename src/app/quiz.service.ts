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
    return this.http.get<Quiz>(this.menuUrl + '/quiz')
      .pipe(catchError(this.handleError('getQuiz', []))
      );
  }

  /** GET Questions */
  getQuestions (): Observable<Question[]> {
    return this.http.get<Question[]>(this.menuUrl + '/questions')
      .pipe(catchError(this.handleError('getQuestions', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
