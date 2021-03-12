import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/common';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {
  public articles: Observable<Article[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.articles = this.db.list<Article>(`articles`).valueChanges();
  }

}
