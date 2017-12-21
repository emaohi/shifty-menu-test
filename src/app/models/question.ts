import {Answer} from "./answer";

export class Question {
  id: number;
  name: string;
  answers: Answer[];
  answered: boolean;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.name = data.content;
    this.answers = [];
    data.answers.forEach(a => {
      this.answers.push(new Answer(a));
    });
  }
}
