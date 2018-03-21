import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { AppSigninScreenComponent } from './app-signin-screen/app-signin-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { QUESTION_ROUTES } from './question/question.routing';

const APP_ROUTES: Routes = [
    { path: '', component: QuestionListComponent, pathMatch: 'full' },
    { path: 'signin', component: AppSigninScreenComponent },
    { path: 'signup', component: SignupScreenComponent },
    { path: 'questions', children: QUESTION_ROUTES}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
