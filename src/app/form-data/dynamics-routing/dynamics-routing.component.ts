import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyServisesService } from 'src/app/test-servises/dummy-servises.service';

@Component({
  selector: 'app-dynamics-routing',
  templateUrl: './dynamics-routing.component.html',
  styleUrls: ['./dynamics-routing.component.css']
})
export class DynamicsRoutingComponent {
  RoutesValus: any
  public data: any;
  GetEMP: any


  users = [
    { Name: "Amit Shukla", Departments: "BCA", Age: "21", Email: "Amit@gmail.com" },
    { Name: "Ankit Shukla", Departments: "BTECh", Age: "22", Email: "Ankit@gmail.com" },
    { Name: "Sandeep Sigh", Departments: "MCA", Age: "24", Email: "Sandeep@gmail.com" },
    { Name: "hari Mishra", Departments: "Diploma", Age: "28", Email: "hari@gmail.com" }
  ]
  constructor(private route: ActivatedRoute, private ListEMPByID: DummyServisesService, private DummyServisesService: DummyServisesService) { }


  ngOnInit(): void {
    this.RoutesValus = this.route.snapshot.paramMap.get("ID");
    console.warn("Values is " + this.route.snapshot.paramMap.get("ID"));
    console.log("this.RoutesValus", this.RoutesValus);
    this.DummyServisesService.myMethod(this.RoutesValus).subscribe(res => {
      this.GetEMP = res
      this.GetEMP = JSON.stringify(this.GetEMP)
    })
}
}


