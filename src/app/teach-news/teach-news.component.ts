import { Component, OnInit } from '@angular/core';
import { NewsServiceApiService } from '../Service/news-service-api.service';

@Component({
  selector: 'app-teach-news',
  templateUrl: './teach-news.component.html',
  styleUrls: ['./teach-news.component.css']
})
export class TeachNewsComponent implements OnInit {

  constructor(private _services: NewsServiceApiService) { }
  Country = this._services.Country;



  TopTechDisplay: any = [];

  ngOnInit(): void {

    this._services.techHeading().subscribe(
      (result) => {
        console.log(result.articles);
        this.TopTechDisplay = result.articles;
      }
    )
  }

  onChange(value: any) {

    this._services.searchByCountrytech(value).subscribe(
      (response) => {
        this.TopTechDisplay = response.articles;


      },

    )

  }

}
