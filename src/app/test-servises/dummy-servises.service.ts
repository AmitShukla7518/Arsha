import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyServisesService {
  //
  id: any;

  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  //
  urlGEt = 'https://reqres.in/api/users?page' //
  urlPost = 'https://reqres.in/api/users' //

  ulrLogin = "https://dummyjson.com/auth/login"
  urlGEtbyID = 'https://jsonplaceholder.typicode.com/todos/'

  constructor(private DummyAPI: HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }
  myMethod(data: any) {
    this.id = data;
    console.log("params values is :" + this.id);
    this.urlGEtbyID = this.urlGEtbyID + this.id

    return this.GetEMPListByID(this.urlGEtbyID)
  }
  ListEmp() {
    console.log(this.DummyAPI.get(this.urlGEt));
    return this.DummyAPI.get(this.urlGEt)
  }
  CreatePost(data: any) {
    return this.DummyAPI.post(this.urlPost, data);
  }
  CreateLogin(data: any) {
    return this.DummyAPI.post(this.ulrLogin, data);
  }

  GetEMPListByID(data: any) {
   
    // return this.DummyAPI.get(data);
     this.DummyAPI.get(data)

     return this.myMethodSubject.asObservable();
  }

  user() {
    return [
      { Name: "Amit Shukla", Departments: "BCA", Age: "21", Email: "Amit@gmail.com" },
      { Name: "Ankit Shukla", Departments: "BTECh", Age: "22", Email: "Ankit@gmail.com" },
      { Name: "Sandeep Sigh", Departments: "MCA", Age: "24", Email: "Sandeep@gmail.com" },
      { Name: "hari Mishra", Departments: "Diploma", Age: "28", Email: "hari@gmail.com" }
    ]
  }
}
