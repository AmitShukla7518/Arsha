import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { DummyServisesService } from 'src/app/test-servises/dummy-servises.service';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})





export class FormLoginComponent {

  invaliduserAuth = new EventEmitter<boolean>(false)
  ShowData: any;
  UserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })
  constructor(private CreateLogin: DummyServisesService, private router: Router) { }
  get isvalidUsernme() {
    return this.UserForm.get('username')
  }
  get isvalidPassword() {
    return this.UserForm.get('password')
  }
  save() {
    this.ShowData = this.UserForm.value;
    this.CreateLogin.CreateLogin(this.ShowData).subscribe((res: any) => {
      if (res) {
        this.invaliduserAuth.emit(false);
        localStorage.setItem("token", res.token);
        this.router.navigateByUrl('');
        this.invaliduserAuth.subscribe(result => {
          console.warn(result);
        })
      } else {
        // alert("dbjhbdh");
        this.invaliduserAuth.emit(true);
      }

    })
    // this.router.navigate(['']);

  }

  Logout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl('Logout');

  }






}

