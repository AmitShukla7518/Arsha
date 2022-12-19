import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dummy1Component } from './dummy1/dummy1.component';
import { Dummy2Component } from './dummy2/dummy2.component';
import { HttpClientModule } from '@angular/common/http';
import { DummyPostComponent } from './dummy-post/dummy-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Dummy1Component,
    Dummy2Component,
    DummyPostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [Dummy1Component, Dummy2Component]
})
export class TestServisesModule { }
