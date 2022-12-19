import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {
ShowData: any;

UserForm = new FormGroup({
    First_name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    Last_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    MobileNO: new FormControl('', [Validators.required, Validators.pattern("[0-9]{12}")]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8),
    Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
    CheckBox: new FormControl('', [Validators.required]),
    CnfrmPassword: new FormControl('', [Validators.required])
  })
  get isValidFname() {
    return this.UserForm.get('First_name')
  }
  get isValidLname() {
    return this.UserForm.get('Last_name')
  }
  get isValidEmail() {
    return this.UserForm.get('Email')
  }
  get isValidMobile() {
    return this.UserForm.get('MobileNO')
  }
  get invalidPassword() {
    return this.UserForm.get('Password')
  }

  save() {
    console.warn(this.UserForm.value);
    this.ShowData = this.UserForm

  }



}
