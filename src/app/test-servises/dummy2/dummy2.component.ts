import { Component } from '@angular/core';
import { DummyServisesService } from '../dummy-servises.service';


@Component({
  selector: 'app-dummy2',
  templateUrl: './dummy2.component.html',
  styleUrls: ['./dummy2.component.css']
})
export class Dummy2Component {
  Emplist: any
  constructor(private ListEMP: DummyServisesService) {
 ListEMP.ListEmp().subscribe((data:any)=>{

  // this.Emplist =data
  this.Emplist = data['data']
  console.warn(this.Emplist);
 })


  }



  /* 
    userList:any;
    
    constructor(userData:DummyServisesService){
  
      console.warn("User Data :" +JSON.stringify(userData.user()));
      this.userList = userData.user();
  
    } */


}
