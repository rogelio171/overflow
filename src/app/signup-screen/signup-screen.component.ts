import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../app-signin-screen/user.model';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {

  hide = true;
  signupForm: FormGroup;
  passwordNotCheck = false;

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      passwordCheck: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.signupForm.valid && this.signupForm.value.password === this.signupForm.value.passwordCheck) {
      const {firstName, lastName, email, password} = this.signupForm.value;
      const user = new User(email, password, firstName, lastName);
      this.passwordNotCheck = false;
      console.log(user);
    } else {
      this.passwordNotCheck = true;
    }
  }

}
