import {Restaurants} from './Restaurants';

export let DUMMIES: Restaurants[] = [
  new Restaurants({
    name: 'Tav Cafe',
    website: 'https://www.tav.ca',
    phone: '(514) 112-3581',
    rating: 4,
    priceRange: 3,
    reviews: []
  }),
  new Restaurants({
    name: 'Pizza Pita',
    phone: '(514) 112-3581',
    rating: 3,
    reviews: []
  }),
  new Restaurants({
    name: 'Home',
    website: 'https://www.google.ca',
    rating: 5,
    priceRange: 3,
    reviews: []
  })
];
