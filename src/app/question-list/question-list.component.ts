import { Component } from '@angular/core';
import { Question } from '../question/question.model';

const q = new Question(
  'How to use a component in Android?',
  'This is the description',
  new Date(), 'devicon-gitlab-plain');

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  questions: Question[] = new Array(10).fill(q);
}
