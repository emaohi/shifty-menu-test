import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Answer} from "./models/answer";
import {Question} from "./models/question";

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    let answers: Answer[] = [
      {id: 1, questionId: 1, isAnswer: true, name: 'koko', selected: false},
      {id: 2, questionId: 1, isAnswer: false, name: 'yoyo', selected: false},
      {id: 3, questionId: 1, isAnswer: false, name: 'momo', selected: false},
      {id: 4, questionId: 1, isAnswer: false, name: 'zozo', selected: false},
      ];
    let questions: Question[] = [
      {id: 1, name: 'What is the best blabla', answers: answers, answered: true},
      {id: 2, name: 'What is the best tapioca', answers: answers, answered: true},
      {id: 3, name: 'What is the best Whiskey', answers: answers, answered: true},
      {id: 4, name: 'What is the best Vodka', answers: answers, answered: true},
    ];
    const test = [
      {id: 1, time: 15, name: 'Waiters test', questions: questions},
      {id: 2, time: 13, questions: ['a', 'b', 'c']},
    ];
    return {test};
  }

}
