import { Component, OnInit } from '@angular/core';

import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  
  article: Article;

  constructor() {
    this.article = new Article('youtube', 'http://www.youtube.com', 10);
   }

  voteUp(): boolean {
    this.article.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }
  ngOnInit() {
  }

}
