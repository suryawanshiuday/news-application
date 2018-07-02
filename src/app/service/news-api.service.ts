import { Injectable } from '@angular/core';
import { News } from '../model/news';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private result: News[];
  private actualServiceResponse: any[];
  constructor(private http: HttpClient) {
    this.result = [];
    this.actualServiceResponse = [];
  }
  public getLatestNewsHeadlines(): Observable<any> {
    const newsurl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ee2cc60f113a4713858ce836d6ca93c3';
    return this.http.get(newsurl);
  }
  public getLatestNewsHeadlinesLocal(): News[] {
    const newsurl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ee2cc60f113a4713858ce836d6ca93c3';
    this.http.get(newsurl).subscribe(response => {
      this.actualServiceResponse = response['articles'];
    });
    const news1: News = {
      url: 'http://www.espn.com/nba/story/_/id/23957834/kevin-durant-sign-one-one-deal-golden-state-warriors',
      urlToImage: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0606%2Fr381979_1296x729_16%2D9.jpg',
      title: 'Sources: Warriors\' Durant to ink one-and-one deal',
      description: 'Two-time NBA Finals MVP Kevin Durant',
      author: 'author1'
    };
    const news2: News = {
      author: 'Kate King',
      title: 'New Jersey Governor, Lawmakers Reach Budget Deal, Avoid Shutdown',
      description: 'New Jersey Gov.Phil Murphy and state lawmakers',
      url: 'https://www.wsj.com/articles/new-jersey-governor-lawmakers-reach-budget-deal-avoid-shutdown-1530409878',
      urlToImage: 'https://images.wsj.net/im-16446/social'
    };
    this.result.push(news1);
    this.result.push(news2);
    return this.result;
  }

}
