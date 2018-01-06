import {Answer} from "./answer";

export class Question {
  id: number;
  name: string;
  answers: Answer[];
  answered: boolean;

  constructor() {
    this.answered = false;
  }

  static createFrom(data: any) {
    let question = new Question();
    data = data || {};
    question.answers = [];
    question.id = data.id;
    question.name = data.content;
    if (data.answers) {
      data.answers.forEach(a => {
        question.answers.push(Answer.createFrom(a));
      });
    } else {
      question.answers = [];
    }
    return question;
  }
}
