import { Component } from '@angular/core';
import { Question } from './question.model'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  question: Question = new Question('This is an example title for testing the design', 'This is the description text used for testing...', new Date, 'devicon-angularjs-plain');

}
