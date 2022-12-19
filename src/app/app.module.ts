import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDataModule } from './form-data/form-data.module';
import { ChileToParantsComponent } from './chile-to-parants/chile-to-parants.component';
import { TestServisesModule } from './test-servises/test-servises.module';
import { HttpClientModule } from '@angular/common/http';
import { ParntsToChildComponent } from './parnts-to-child/parnts-to-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChileToParantsComponent,
    ParntsToChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormDataModule,
    TestServisesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
