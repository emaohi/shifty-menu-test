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
import {CookieService} from "ngx-cookie-service";
import { QuizSubmitComponent } from './quiz-submit/quiz-submit.component';
import { QuizCreatorComponent } from './quiz-creator/quiz-creator.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuizRoleCreatorComponent } from './quiz-role-creator/quiz-role-creator.component';
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizReviewComponent,
    QuizSubmitComponent,
    QuizCreatorComponent,
    QuestionDetailsComponent,
    QuizRoleCreatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService
    // )
  ],
  providers: [QuizService, InMemoryDataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
