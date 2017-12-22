import {Question} from "./question";

export class Quiz {
  id: number;
  name: string;
  questions: Question[];
  time: number;
  scoreToPass: number;
  isPreview: boolean;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.scoreToPass = data.score_to_pass;
      this.time = data.time_to_pass;
      this.isPreview = data.is_preview;
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
