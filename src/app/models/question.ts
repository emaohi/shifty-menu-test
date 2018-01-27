import {Answer} from "./answer";

export class Question {
  id: number;
  name: string;
  answers: Answer[];
  answered: boolean;
  backend_model: string;

  constructor() {
    this.name = "new question";
    this.answered = false;
  }

  static createFrom(data: any) {
    let question = new Question();
    data = data || {};
    let dataFields = data.fields;
    question.answers = [];
    question.id = data.pk;
    question.backend_model = data.model;
    question.name = dataFields.content;
    if (data.answers) {
      data.answers.forEach(a => {
        question.answers.push(Answer.createFrom(a));
      });
    } else {
      question.answers = [];
    }
    return question;
  }

  createPostData(quizId: number): any {
    let data = [];

    let question_data = {"fields": {"quiz": quizId}};
    question_data["pk"] = this.id;
    question_data["model"] = this.backend_model ? this.backend_model : 'menu.question';
    question_data["fields"]["content"] = this.name;
    data.push(question_data);

    this.answers.forEach(ans => {
      data.push(ans.createPostData(this.id));
    });
    console.log("data is " + data);
    return data;
  }
}
