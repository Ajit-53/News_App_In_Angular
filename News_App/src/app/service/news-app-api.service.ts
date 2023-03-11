import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsAppApiService {

  constructor(private _http:HttpClient) { }

  //api url 
  private readonly topHeadlineNews = '';
  //api Tech
  private readonly tech = '';
  // api Business
  private readonly Business = '';

  public HeadLinenews(): Observable<any>{
    return this._http.get(this.topHeadlineNews);
  }
  public Technews(): Observable<any>{
    return this._http.get(this.tech);
  }
  public BusinessNews(): Observable<any>{
    return this._http.get(this.Business);
  }
}
