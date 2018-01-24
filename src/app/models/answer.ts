export class Answer {
  id: number;
  questionId: number;
  name: string;
  isAnswer: boolean;
  selected: boolean;
  backend_model: string;

  constructor() {
    this.selected = false;
  }

  static createFrom(data: any) {
    let answer: Answer = new Answer();
    data = data || {};
    let dataFields = data.fields;
    answer.id = data.pk;
    answer.backend_model = data.model;
    answer.questionId = dataFields.question;
    answer.name = dataFields.content;
    answer.isAnswer = dataFields.is_correct;
    answer.selected = false;
    return answer;
  }

  createPostData(newQuestionId: number): any {
    let data = {"fields": {"question": this.questionId ? this.questionId : newQuestionId}};
    data["pk"] = this.id;
    data["model"] = this.backend_model ? this.backend_model : 'menu.answer';
    data["fields"]["content"] = this.name;
    data["fields"]["is_correct"] = this.isAnswer;
    return data;
  }
}

