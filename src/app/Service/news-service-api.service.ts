import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceApiService {
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

  constructor(private _http: HttpClient) { }

  // newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=aa80f860933146e8b66c496a30277b15';
  newsApiUrl = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f46e69a26c5544a0935c387aee40335c';
  technewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f46e69a26c5544a0935c387aee40335c';
  bussinesewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f46e69a26c5544a0935c387aee40335c';
  serachCountrUrl = 'https://newsapi.org/v2/top-headlines';

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  techHeading(): Observable<any> {
    return this._http.get(this.technewsApiUrl);
  }

  bussinessHeading(): Observable<any> {
    return this._http.get(this.bussinesewsApiUrl);
  }

  searchByCountry(country: any): Observable<any> {
    return this._http.get(this.serachCountrUrl, {
      params: new HttpParams()
        .set('country', country)
        // .set('category', 'business')
        .set('apiKey', 'f46e69a26c5544a0935c387aee40335c')
    });
  }
  searchByCountrybussiness(country: any): Observable<any> {
    return this._http.get(this.serachCountrUrl, {
      params: new HttpParams()
        .set('country', country)
        .set('category', 'business')
        .set('apiKey', 'f46e69a26c5544a0935c387aee40335c')
    });
  }

  searchByCountrytech(country: any): Observable<any> {
    return this._http.get(this.serachCountrUrl, {
      params: new HttpParams()
        .set('country', country)
        .set('category', 'technology')
        .set('apiKey', 'f46e69a26c5544a0935c387aee40335c')
    });
  }

}
