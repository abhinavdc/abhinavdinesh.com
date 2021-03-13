import { Component, Input, OnInit } from '@angular/core';
import { fadeInExpandOnEnterAnimation, fadeOutCollapseOnLeaveAnimation } from 'angular-animations';
import { Project } from 'src/app/shared/models/common';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  animations: [
    fadeInExpandOnEnterAnimation(),
    fadeOutCollapseOnLeaveAnimation()
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() data: Project;
  showStackFlag: boolean;

  constructor() { }

  ngOnInit(): void {}

  toggleStack() {
    this.showStackFlag = !this.showStackFlag;
  }

}
