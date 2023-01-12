import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { NewsServiceApiService } from '../Service/news-service-api.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private _services: NewsServiceApiService, private appComponent: AppComponent) { }

  Country = this._services.Country;


  TopHeadingDisplay: any = [];

  ngOnInit(): void {

    this._services.topHeading().subscribe(
      (result) => {
        this.TopHeadingDisplay = result.articles;
      }
    )

  }
  onChange(value: any) {

    this._services.searchByCountry(value).subscribe(
      (response) => {
        this.TopHeadingDisplay = response.articles;


      },

    )

  }


}


