import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/models/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Observable<Project[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.projects = this.db.list<Project>('projects').valueChanges();
  }

}
