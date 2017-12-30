import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizComponent} from "./quiz/quiz.component";
import {APP_BASE_HREF} from "@angular/common";
import {QuizCreatorComponent} from "./quiz-creator/quiz-creator.component";

const routes: Routes = [
  { path: '', component: QuizComponent},
  { path: 'create', component: QuizCreatorComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/menu/test'}]

})
export class AppRoutingModule {}
