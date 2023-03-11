import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import {TechComponent} from './tech/tech.component'
import {BusinessComponent} from './business/business.component'

const routes: Routes = [
  {path:'', component:TopheadlineComponent}, // by default it's open topheadlines & home.\
  {path:'Tech', component:TechComponent},
  {path:'Business', component:BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
