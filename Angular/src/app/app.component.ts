import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { products } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  userForm: FormGroup;
  userCount = 0;
  users: any;

  constructor(public products: products,
    private formBuilder: FormBuilder) {}

  title = 'angular-nodejs-example';





  // destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(){
    this.userForm = this.formBuilder.group({
      id: ['',  Validators.required],
      name: ['',  Validators.required],
     //email: ['', Validators.nullValidator() && Validators.required)
      });

  }

  onSubmit() {
    console.log(this.userForm.value, 'userform1');
    this.products.addTask(this.userForm.value.id, this.userForm.value.name);
  }

  // getAllUsers() {
  //   this.products.getTasks().subscribe((res: any[]) => {
  //       this.users = res;
  //   });
  // }

  // ngOnDestroy() {
  //   this.destroy$.next(true);
  //   this.destroy$.unsubscribe();
  // }
}


























  // this.http.post('http://localhost:5000/addproducts')
//   .subcribe((result)=>{
//    console.log("result",result)
//   })



//   onSubmit(data)
// {
//   console.warn(data);
// }
