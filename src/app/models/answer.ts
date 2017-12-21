export class Answer {
  id: number;
  questionId: number;
  name: string;
  isAnswer: boolean;
  selected: boolean;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.questionId = data.question;
    this.name = data.content;
    this.isAnswer = data.is_correct;
  }
}

