import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/common';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html'
})
export class ArticleItemComponent implements OnInit {

  @Input() data: Article;
  
  constructor() { }

  ngOnInit(): void {
  }

}
