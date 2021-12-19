import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgControl, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  isControlValid(control: NgControl) {
    if(control.errors) {
      return true;
    }
    else {
      return false;
    }
  }

  getErrorMessage(control: NgControl) {
    const errors = control.errors
    if(errors) {
      switch(errors) {
        case errors['required']: return control.name+ ' required';
        default: return 'Enter a valid '+control.name;
      }
    } else {
      return '';
    }
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm);
    if(loginForm.valid) {
      const formValues = loginForm.form.value;
      console.log(loginForm.form.value);
      this.loginService.login(formValues);
    }

  }

}
