import {Question} from "./question";

export class Quiz {
  id: number;
  name: string;
  description: string;
  questions: Question[];
  time: number;
  scoreToPass: number;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.scoreToPass = data.score_to_pass;
      this.time = data.time_to_pass;
      this.questions = [];
      if (data.questions) {
        data.questions.forEach(q => {
          this.questions.push(new Question(q));
        });
      } else {
        this.questions = [];
      }
    }
  }
}
