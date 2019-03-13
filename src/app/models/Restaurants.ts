import {Address} from './Address';
import {Review} from './Review';

export class Restaurants {
  name: string;
  website: string;
  phone: string;
  rating: number;
  priceRange: number;
  reviews: Review[];
  location: Address[];
  constructor(a?) {
    this.name = a.name;
    this.website = a.website;
    this.phone = a.phone;
    this.rating = a.rating;
    this.priceRange = a.priceRange;
  }
}
