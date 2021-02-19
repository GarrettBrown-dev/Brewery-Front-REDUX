import beerListReducer from '../../reducers/beer-list-reducer';

describe('beerListReducer', () => {

  let action;
  const beerInfo = {
    name: 'DungleDuster',
    brand: 'Duster',
    alcoholContent: 5,
    price: 5,
    quantity: 5,
    id: 1
  };