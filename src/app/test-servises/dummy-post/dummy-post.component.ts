import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { DummyServisesService } from '../dummy-servises.service';

@Component({
  selector: 'app-dummy-post',
  templateUrl: './dummy-post.component.html',
  styleUrls: ['./dummy-post.component.css']
})
export class DummyPostComponent {


  constructor(private CreatePost: DummyServisesService) { }




  PostData: any

  UserForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Job: new FormControl('', [Validators.required, Validators.maxLength(3)])
  })




  save() {
    this.PostData = this.UserForm.value;
    console.warn(this.PostData);
    this.CreatePost.CreatePost(this.PostData).subscribe((res) => {
      console.warn(res);
    })

  }
}
