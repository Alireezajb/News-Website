import { Component, OnInit } from '@angular/core';
import { NewsServiceApiService } from './Service/news-service-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'newsWebsite';
  countrySelect: any;
  Country = [
    { value: 'ae', name: 'United Arab Emirates' },
    { value: 'au', name: 'Austria' },
    { value: 'be', name: 'Belgium' },
    { value: 'bg', name: 'Bangladesh' },
    { value: 'br', name: 'Brazil' },
    { value: 'ch', name: 'China' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
    { value: 'de', name: 'Germany' },
    { value: 'nl', name: 'Netherlands' },
    { value: 'us', name: 'United States' },
  ]

  constructor(private _service: NewsServiceApiService) { }





  onChange(value: any) {

    this._service.searchByCountry(value).subscribe(
      (response) => {
        this.countrySelect = value;
        // console.log(response);
        // console.log(this.countrySelect);

      },

    )

  }


}
