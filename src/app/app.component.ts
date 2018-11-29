import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mArticles:any;
  mSources:any;

  constructor(private newsapi:NewsApiService){}

  ngOnInit() {
    //load articles
   this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
  //load news resources
   this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);    
}
searchArticles(source){
  this.newsapi.getArticleByID(source).subscribe(data => this.mArticles = data['articles']);
}
}
