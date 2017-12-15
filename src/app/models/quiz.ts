import {Question} from "./question";

export class Quiz {
  id: number;
  name: string;
  description: string;
  questions: Question[];
  scoreToPass: number;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.scoreToPass = data.scoreToPass;
      this.questions = [];
      data.questions.forEach(q => {
        this.questions.push(new Question(q));
      });
    }
  }
}
