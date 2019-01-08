import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey="b7a24da1e7b647a49d862109d3ef5bce";
  url;

  constructor(private http: Http) { 
    this.url='http://api.openweathermap.org/data/2.5/weather?q='
  }

  getWeather(city, code) {
    console.log(this.url + city + ',' + code + '&APPID=' + this.apiKey);
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey)
    .pipe(map(res => res.json()));
  }
}
  