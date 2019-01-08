import { WeatherService } from '../weather.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  locationForm: FormGroup;
  weather:any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.locationForm = new FormGroup({
      city: new FormControl(),
      code: new FormControl()
    });
  }
  
  onSubmit(): void {
    console.log(this.locationForm.get('city').value + " " + this.locationForm.get('code').value)
    
    this._weatherService.getWeather(this.locationForm.get('city').value, this.locationForm.get('code').value)
    .subscribe(response => {this.weather = response });
  }
}
