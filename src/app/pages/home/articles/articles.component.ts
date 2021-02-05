import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {
  public articles: Article[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Article[]>(`${environment.apiUrl}articles`).subscribe((articles) =>{
      this.articles = articles;
    });
  }

}
