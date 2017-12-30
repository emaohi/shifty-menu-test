import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuizService} from "../quiz.service";
import {Quiz} from "../models/quiz";

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {

  @Input() quiz: Quiz;

  @Output() refreshNeeded: EventEmitter<any> = new EventEmitter();
  @Output() generateSuccessMessage: EventEmitter<any> = new EventEmitter();
  @Output() generateErrorMessage: EventEmitter<any> = new EventEmitter();

  createdID: string;

  constructor(
    private quizService: QuizService) {this.createdID= "";}


  ngOnInit(): void {
  }

  createQuiz(): void {
    console.log('Going to create quiz: ' + JSON.stringify(this.quiz));

    this.quizService.create(this.quiz)
      .then((res:any) => {
        console.log("Event created: ", res);
        this.createdID = this.extractGeneratedIdFrom(res);
        this.removeLastGeneratedEventIdAfter(3000);
        this.quiz = new Quiz();
        this.refreshNeeded.emit();
      })
      .catch((err: any) => {
        console.error("error occurred " + err);
        this.generateErrorMessage.emit('Couldn\'t create event: ' + err);
      })
  }

  deleteEvent(): void {
    console.log('Going to delete event: ' + JSON.stringify(this.quiz));

    this.quizService.delete(this.quiz.id)
      .then(() => {
        this.generateSuccessMessage.emit('quiz with id ' + this.quiz.id + ' was deleted successfully');
        this.refreshNeeded.emit();
      })
      .catch((err: any) => {
        console.error("error occurred " + err);
        this.generateErrorMessage.emit('Couldn\'t delete quiz with id ' + this.quiz.id);
      })
  }

  updateEvent(): void {
    console.log('Going to update quiz: ' + JSON.stringify(this.quiz));

    this.quizService.update(this.quiz.id, this.quiz)
      .then(() => {
        this.generateSuccessMessage.emit('quiz with id ' + this.quiz.id + ' was updated successfully');
        this.refreshNeeded.emit();
      })
      .catch((err: any) => {
        console.error("error occurred " + err);
        this.generateErrorMessage.emit('Couldn\'t update quiz with id ' + this.quiz.id);
      })
  }

  private removeLastGeneratedEventIdAfter(millis: number) {
    setTimeout(() => this.createdID = "", millis);
  }

  private extractGeneratedIdFrom(res: any) {
    return  JSON.parse(res._body).id;
  }

  private removeLastUpdatedEventIdAfter(millis: number) {
    setTimeout(() => this.createdID = "", millis);
  }

}
