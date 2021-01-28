import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/common';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html'
})
export class ProjectItemComponent implements OnInit {

  @Input() data: Project;

  constructor() { }

  ngOnInit(): void {}

}
