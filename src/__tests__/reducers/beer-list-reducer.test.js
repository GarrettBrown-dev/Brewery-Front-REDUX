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

  const currentState = {
    1: {
      name: 'DungleDuster',
      brand: 'Duster',
      alcoholContent: 5,
      price: 5,
      quantity: 5,
      id: 1
    },
    2: {
      name: 'TripleDuster',
      brand: 'Duster',
      alcoholContent: 8,
      price: 5,
      quantity: 10,
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
})