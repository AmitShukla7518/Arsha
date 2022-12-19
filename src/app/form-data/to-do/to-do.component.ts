import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  ListAdd :any[]=[]

  AddTask(itam:string){
    
    this.ListAdd.push({id:this.ListAdd.length,Name:itam});
    console.log(this.ListAdd);
  }
 RemoveTask(id:number){

    console.warn(id);
    
    this.ListAdd=this.ListAdd.filter(itam => itam.id!==id);
  }
}
