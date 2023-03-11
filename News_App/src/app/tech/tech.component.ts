import { Component, OnInit } from '@angular/core';
import {NewsAppApiService} from '../service/news-app-api.service'

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  tech:any = [];
  constructor(private newsApi:NewsAppApiService
    ) { }

  ngOnInit(): void {
   this.newsApi.Technews().subscribe((result =>{
    this.tech = result.articles;
   }))
  }
  

}
