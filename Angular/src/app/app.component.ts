import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


import { OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor(private appComponent: appComponent) {}

  title = 'angular-nodejs-example';

  userForm = new FormGroup({
    Id: new FormControl('',  Validators.required),
    Name: new FormControl('',  Validators.required),
   //email: new FormControl('', Validators.nullValidator() && Validators.required)
  });

  const users any[];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {

    this.appComponent.addUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.userCount = this.userCount + 1;
      console.log(this.userCount);
      this.userForm.reset();
    });
  }

  getAllUsers() {
    this.appComponent.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
        this.users = users;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}


























  // this.http.post('http://localhost:5000/addproducts')
//   .subcribe((result)=>{
//    console.log("result",result)
//   })



//   onSubmit(data)
// {
//   console.warn(data);
// }
