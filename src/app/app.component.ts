import { Component } from '@angular/core';
import { FormControl,  FormGroup } from '@angular/forms';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YelpApi';
  myForm= new FormGroup({
  price: new FormControl(),
  city: new FormControl(),
  })
  restaurants: any
  
  constructor(
    private restService: ApiService
  ){ }
  delivery: string

  getRest() {
    this.restService.getRest(this.myForm.value.city, this.myForm.value.price).subscribe(data => {
    this.restaurants = data.businesses[Math.floor(Math.random()*data.businesses.length)]
    console.log(this.restaurants)
    let deliver = this.restaurants.transactions.indexOf('delivery')
        if(deliver > 0){
          this.delivery = "Pickup & Delivery!"
        } else {
          this.delivery = 'Pickup & Dine-In Only!'
        }
    return this.restaurants
  })}

  
  
}
