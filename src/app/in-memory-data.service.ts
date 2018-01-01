import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Answer} from "./models/answer";
import {Question} from "./models/question";

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const test = [
      {id: 'get_quiz', is_preview: true, time_to_pass: 15, score_to_pass: 60, name: 'Waiters test',
        questions: this.createQuestions(10)},
      {id: 'get_quizzes', business_name: 'cool-business',
        roles: [{'name': 'Waiter', 'imageUrl': 'https://png.icons8.com/metro/50/000000/waiter.png'},
          {'name': 'Bartender', 'imageUrl': 'https://png.icons8.com/metro/50/000000/waiter.png'},
          {'name': 'Cook', 'imageUrl': 'https://png.icons8.com/metro/50/000000/waiter.png'}]},
    ];

    return {test};
  }

  createQuestions (num: number) {
    let questions = [];
    let drinks = {0: 'Rum', 1: 'Tapioca', 2: 'Whiskey', 3: 'Vodka'};
    for (let i = 0; i < num; i++){
      questions.push({id: i, content: 'What is the best ' + drinks[i % 4],
        answers: this.createAnswers(i), answered: true})
    }
    return questions;
  }

  createAnswers(num: number) {
    let answers = [];
    for (let i = 0; i < 4; i++){
      answers.push({id: 1, questionId: 1, is_correct: i == 1,
        content: 'koko_' + (num + 1) + '_' + (i + 1), selected: false})
    }
    return answers;
  }

}
