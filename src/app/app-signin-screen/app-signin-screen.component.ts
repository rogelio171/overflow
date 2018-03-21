import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-signin-screen',
  templateUrl: './app-signin-screen.component.html',
  styleUrls: ['./app-signin-screen.component.css']
})
export class AppSigninScreenComponent implements OnInit {

  signinForm: FormGroup;
  hide = true;

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;
      const user = new User(email, password);
      console.log(user);
    }
  }

}
