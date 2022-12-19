import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//parants to Child 
  title = 'arsha';
  Data = "Data1";
  Data2 = "hello "


  UpdateData() {
    this.Data = "Data 2 "
    this.Data2 = "Hii"
}

// child to parants 


valueOFChild="Before";

UpdateData2(item:string){
console.warn(item);
this.valueOFChild = item;

}

} 



