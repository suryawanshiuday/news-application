import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';
import { News } from '../model/news';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public newsList: News[];
  public newsLiveList: any[];
  constructor(private newsService: NewsApiService) {
    this.newsLiveList = [];
  }

  ngOnInit() {
    this.newsLiveList = [];
    // this.newsList = this.newsService.getLatestNewsHeadlinesLocal();
    this.getNewsDetails();
  }
  private getNewsDetails() {
    this.newsService.getLatestNewsHeadlines().subscribe(data => {
      this.newsLiveList = data['articles'];
      this.newsLiveList.forEach(item => {
        this.newsList.push(item);
      });
    });
  }

}
