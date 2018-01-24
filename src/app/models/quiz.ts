import {Question} from "./question";

export class Quiz {
  id: number;
  name: string;
  questions: Question[];
  time: number;
  scoreToPass: number;
  isPreview: boolean;

  static createFrom(data: any) : Quiz{
    let quiz : Quiz = new Quiz();
    if (data) {
      let dataFields = data.fields;
      quiz.id = data.pk;
      quiz.name = dataFields.name;
      quiz.scoreToPass = dataFields.score_to_pass;
      quiz.time = dataFields.time_to_pass;
      quiz.isPreview = data.is_preview;
      quiz.questions = [];
      if (data.questions) {
        data.questions.forEach(q => {
          quiz.questions.push(Question.createFrom(q));
        });
      } else {
        quiz.questions = [];
      }
    }
    return quiz;
  }
}
