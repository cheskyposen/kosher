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
}
