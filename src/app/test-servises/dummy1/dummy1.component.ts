import { Component } from '@angular/core';
import { DummyServisesService } from '../dummy-servises.service';

@Component({
  selector: 'app-dummy1',
  templateUrl: './dummy1.component.html',
  styleUrls: ['./dummy1.component.css']
})
export class Dummy1Component {
  userList:any;
  
  constructor(userData:DummyServisesService){

    console.warn("User Data :" +JSON.stringify(userData.user()));
    this.userList = userData.user();

  }

}
