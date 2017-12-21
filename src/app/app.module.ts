import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizService } from './quiz.service';
import {HttpClientModule} from "@angular/common/http";
import { InMemoryDataService } from './in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {FormsModule} from "@angular/forms";
import { QuizReviewComponent } from './quiz-review/quiz-review.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService
    // )
  ],
  providers: [QuizService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
