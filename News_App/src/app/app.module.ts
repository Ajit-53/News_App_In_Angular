import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsAppApiService} from './service/news-app-api.service'

@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [NewsAppApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
