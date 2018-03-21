import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import 'hammerjs';

import { QuestionComponent } from './question/question.component';
import { MomentModule } from 'angular2-moment';
import { AnswerComponent } from './answer/answer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSigninScreenComponent } from './app-signin-screen/app-signin-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';

import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionComponent,
    AnswerComponent,
    AppSigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
