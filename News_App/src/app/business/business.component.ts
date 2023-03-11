import { Component, OnInit } from '@angular/core';
import {NewsAppApiService} from '../service/news-app-api.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businessNews: any =[];
  constructor(private newsAppApiService: NewsAppApiService ) { }

  ngOnInit(): void {
    this.newsAppApiService.BusinessNews().subscribe((result =>{
     this.businessNews = result.articles;
    }))
  }

}
