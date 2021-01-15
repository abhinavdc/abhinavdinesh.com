import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../layout/components/nav/nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavComponent],
  exports: [NavComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
