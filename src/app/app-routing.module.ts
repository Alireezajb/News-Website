import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { TeachNewsComponent } from './teach-news/teach-news.component';
import { BussinesNewsComponent } from './bussines-news/bussines-news.component';



const routes: Routes = [
  { path: '', component: TopHeadingComponent },
  { path: 'home', component: TopHeadingComponent },
  { path: 'tech', component: TeachNewsComponent },
  { path: 'bussiness', component: BussinesNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
