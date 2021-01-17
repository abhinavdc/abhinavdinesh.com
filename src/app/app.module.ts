import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfoliosComponent } from './pages/portfolios/portfolios.component';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { NavComponent } from './layout/components/nav/nav.component';
import { BioComponent } from './pages/home/bio/bio.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/home/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfoliosComponent,
    BlogComponent,
    AboutComponent,
    LayoutComponent,
    NavComponent,
    BioComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
