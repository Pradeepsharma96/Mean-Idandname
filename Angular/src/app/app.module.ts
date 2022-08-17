import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { User } from './user.components/user.components.component';
// import { App } from './app.sevices/app.sevices.component';
// import { DisplayBoard } from './display-board./display-board..component';
@NgModule({
  declarations: [
    AppComponent,
    // User.ComponentsComponent,
    // App.SevicesComponent,
    // DisplayBoard.Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
