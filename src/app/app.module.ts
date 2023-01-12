import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { HttpClientModule } from '@angular/common/http';
import { TeachNewsComponent } from './teach-news/teach-news.component';
import { BussinesNewsComponent } from './bussines-news/bussines-news.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TeachNewsComponent,
    BussinesNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
