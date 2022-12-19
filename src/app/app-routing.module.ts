import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './form-data/form-array/form-array.component';

import { FormReactiveComponent } from './form-data/form-reactive/form-reactive.component';
import { HomeComponent } from './form-data/home/home.component';
import { Dummy1Component } from './test-servises/dummy1/dummy1.component';
import { Dummy2Component } from './test-servises/dummy2/dummy2.component';
import { DummyPostComponent } from './test-servises/dummy-post/dummy-post.component';
import { DynamicsRoutingComponent } from './form-data/dynamics-routing/dynamics-routing.component';
import { WildCardComponent } from './form-data/wild-card/wild-card.component';
import { FormLoginComponent } from './form-data/form-login/form-login.component';
import { ToDoComponent } from './form-data/to-do/to-do.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
   {
    path: 'reactiveForm',
    component: FormReactiveComponent
  },
  {
    path: 'FormArrayComponent',
    component: FormArrayComponent
  },
  {
    path: 'FormLoginComponent',
    component: FormLoginComponent
  },
  {
    path: "Dummy1Component",
    component: Dummy1Component
  },
  {
    path: "Dummy2Component",
    component: Dummy2Component
  },
  {
    path: "app-dummy-post",
    component: DummyPostComponent
  },
  {
    path: "DynamicsRoutingComponent/:ID",
    component: DynamicsRoutingComponent
  },
  {
    path:"To-Do",
    component:ToDoComponent
  },
  {
    path: "**",
    component: WildCardComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
