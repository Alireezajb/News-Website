import { Component, OnInit } from '@angular/core';
import { NewsServiceApiService } from '../Service/news-service-api.service';

@Component({
  selector: 'app-bussines-news',
  templateUrl: './bussines-news.component.html',
  styleUrls: ['./bussines-news.component.css']
})
export class BussinesNewsComponent implements OnInit {

  constructor(private _services: NewsServiceApiService) { }

  Country = this._services.Country;



  TopbussinessDisplay: any = [];

  ngOnInit(): void {

    this._services.bussinessHeading().subscribe(
      (result) => {
        console.log(result.articles);
        this.TopbussinessDisplay = result.articles;
      }
    )
  }
  onChange(value: any) {

    this._services.searchByCountrybussiness(value).subscribe(
      (response) => {
        this.TopbussinessDisplay = response.articles;


      },

    )

  }

}
