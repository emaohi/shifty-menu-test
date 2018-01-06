export class Answer {
  id: number;
  questionId: number;
  name: string;
  isAnswer: boolean;
  selected: boolean;

  constructor() {
    this.selected = false;
  }

  static createFrom(data: any) {
    let answer: Answer = new Answer();
    data = data || {};
    answer.id = data.id;
    answer.questionId = data.question;
    answer.name = data.content;
    answer.isAnswer = data.is_correct;
    answer.selected = false;
    return answer;
  }
}

