export class QuizResult {
  questionId: number;
  correctAnswerId: number;

  constructor(data: any) {
    data = data || {};
    this.questionId = data.question;
    this.correctAnswerId = data.answerId;
  }
}

