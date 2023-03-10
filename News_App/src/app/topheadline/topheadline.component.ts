import { Component, OnInit } from '@angular/core';
import {NewsAppApiService } from '../service/news-app-api.service'

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {
  headingNews:any = [];
  constructor(private newsApi: NewsAppApiService) { }

  ngOnInit(): void {
    this.newsApi.HeadLinenews().subscribe((result) => {
     this.headingNews = result.articles;
     console.log(this.headingNews)
    })
  }

}
