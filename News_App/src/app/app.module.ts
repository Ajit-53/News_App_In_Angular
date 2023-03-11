import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsAppApiService} from './service/news-app-api.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component'

@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    NavbarComponent,
    FooterComponent,
    TechComponent,
    BusinessComponent
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
