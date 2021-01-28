import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Project[]>(`${environment.apiUrl}projects`).subscribe((projects) =>{
      this.projects = projects;
    });
  }

}
