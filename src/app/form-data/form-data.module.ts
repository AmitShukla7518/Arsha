import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import {  FormLoginComponent} from './form-login/form-login.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicsRoutingComponent } from './dynamics-routing/dynamics-routing.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { ToDoComponent } from './to-do/to-do.component';

@NgModule({
  declarations: [
    FormReactiveComponent,
    FormLoginComponent,
    FormArrayComponent,
    HomeComponent,
    DynamicsRoutingComponent,
    WildCardComponent,
    ToDoComponent,
    
    
],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    FormArrayComponent,
    FormReactiveComponent,
    FormLoginComponent
  ]
})
export class FormDataModule { }
