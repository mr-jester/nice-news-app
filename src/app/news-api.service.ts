import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'f4fa250c5bb7476db249556f8cde1e76';
  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }

  initArticles(){
    return this.http.get ('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }

  getArticleByID(source:string){
    return this.http.get ('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
