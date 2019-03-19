import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Restaurant} from '../Restaurant';
import {Address} from '../Address';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[];

  constructor() {
    this.restaurants = [
      new Restaurant({
        name: '5 Saisons Sushi',
        phone: '(514) 555-2019',
        website: 'https://www.teamviral.com',
        rating: 5,
        avgMealPrice: 20,
        location: new Address({
          streetNumber: 5594,
          streetName: 'Sherbrooke St W',
          city: 'Montreal',
          province: 'QC',
          postalCode: 'H4A 3A7',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Yakimono',
        phone: '(514) 484-1515',
        website: 'www.yakimono.ca',
        rating: 5,
        avgMealPrice: 50,
        location: new Address({
          streetNumber:  4210,
          apartment: '1',
          streetName: 'Decarie Blvd',
          city: 'Montreal',
          province: 'QC',
          postalCode: 'H4A 3K3',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Chops',
        website: 'https://www.teamviral.com',
        rating: 5,
        avgMealPrice: 40,
        location: new Address({
          streetNumber: 1313,
          streetName: 'Mockingbird Lane',
          city: 'Montreal',
          province: 'QC',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Tav Cafe',
        phone: '(514) 112-3581',
        website: 'http://cafetav.com/',
        rating: 3,
        avgMealPrice: 15
      }),
      new Restaurant({
        name: 'Pizza Pita',
        phone: '(514) 234-1111',
        rating: 4,
        avgMealPrice: 18
      })
    ];
  }

  // region Getters
  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }
  // endregion
}
