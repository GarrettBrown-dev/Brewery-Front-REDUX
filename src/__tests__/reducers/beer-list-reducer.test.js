import beerListReducer from '../../reducers/beer-list-reducer';
import { addBeer, deleteBeer } from '../../actions/';


export const initialState = {
  masterBeerList: [],
  paymaster: 'Garret'
};

describe('beerListReducer', () => {
  const beerInfo = {
    name: 'DungleDuster',
    brand: 'Duster',
    alcoholContent: 5,
    price: 5,
    quantity: 5,
    id: 1
  };
  const beerInfo2 = {
    name: 'TripleDuster',
    brand: 'Duster',
    alcoholContent: 8,
    price: 5,
    quantity: 10,
    id: 2
  };


  const testBeerArray = [
    beerInfo, beerInfo2
  ];

  test('Should return default state if there is no action type passed into reducer', () => {
    expect(beerListReducer(initialState, { type: null })).toEqual(initialState);
  });


  test('Should successfully add new beer to masterBeerList', () => {
    const testAction = addBeer(beerInfo);

    expect(beerListReducer(initialState, testAction)).toEqual({
      ...initialState,
      masterBeerList: [beerInfo]
    });
  });

  test('Should successfully delete a beer', () => {
    const testAction = deleteBeer(beerInfo.id);
    const testState = { ...initialState, masterBeerList: testBeerArray };

    expect(beerListReducer(testState, testAction)).toEqual({
      ...initialState,
      masterBeerList: [beerInfo2]
    });
  });
});
