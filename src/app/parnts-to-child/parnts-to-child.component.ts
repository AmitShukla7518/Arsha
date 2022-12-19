import { Component ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-parnts-to-child',
  templateUrl: './parnts-to-child.component.html',
  styleUrls: ['./parnts-to-child.component.css']
})
export class ParntsToChildComponent {

@Output() updateDataEvents =new EventEmitter <string>()



}
