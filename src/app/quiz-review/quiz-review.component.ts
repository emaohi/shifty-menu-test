import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from "../models/quiz";
import {Question} from "../models/question";
import {QuizService} from "../quiz.service";
import set = Reflect.set;

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.css']
})
export class QuizReviewComponent implements OnInit {

  @Input() quiz: Quiz;
  @Output() showQuestion: EventEmitter<any> = new EventEmitter();

  submitted : boolean = false;

  submitResult : any;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    console.log(JSON.stringify(this.quiz.questions[0].answers[0]));
  }

  isAnswered(question: Question) : boolean {
    return !!question.answers.find(x => x.selected);
  };


  selectedAnswer(question: Question) : string{
    let name: string;
    question.answers.forEach(a => {
      if (a.selected) {
        name = a.name;
      }
    });
    return name ? name: "not answered";
  }

  gotoQuestion(questionId: number): void {
    console.log(questionId);
    this.showQuestion.emit(questionId);
  }

  submitQuiz() : void {
    this.quizService.submitQuiz(this.quiz).subscribe(
      res => {
        this.submitted = true;
        console.log('ok, res is: ' + JSON.stringify(res));
        this.submitResult = res;
        setTimeout(window.location.reload.bind(window.location), 3000);
      },
      err => {
        console.error("Error: " + err.message);
      }
    );
  }

}
