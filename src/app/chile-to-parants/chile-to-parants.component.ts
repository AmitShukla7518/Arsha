import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chile-to-parants',
  templateUrl: './chile-to-parants.component.html',
  styleUrls: ['./chile-to-parants.component.css']
})
export class ChileToParantsComponent {
  constructor() { }
  
  @Input() items=''
  @Input()  hello =''
 
 
  ngOninit(): void {

  }

}
