import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Answer} from "./models/answer";
import {Question} from "./models/question";

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const test = [
      {id: 1, time: 15, name: 'Waiters test', questions: this.createQuestions(10)},
      {id: 2, time: 13, questions: ['a', 'b', 'c']},
    ];
    return {test};
  }

  createQuestions (num: number) {
    let questions : Question[] = [];
    let drinks = {0: 'Rum', 1: 'Tapioca', 2: 'Whiskey', 3: 'Vodka'};
    for (let i = 0; i < num; i++){
      questions.push({id: i, name: 'What is the best ' + drinks[i % 4],
        answers: this.createAnswers(i), answered: true})
    }
    return questions;
  }

  createAnswers(num: number) {
    let answers : Answer[] = [];
    for (let i = 0; i < 4; i++){
      answers.push({id: 1, questionId: 1, isAnswer: i == 1, name: 'koko_' + num + '_' + i, selected: false})
    }
    return answers;
  }

}
