
export const initialState = {
  masterBeerList: [],
  paymaster: 'Garret'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BEER':
      return {
        ...state,
        masterBeerList: [...state.masterBeerList, action.payload]
      };
    case 'DELETE_BEER':
      return {
        ...state,
        masterBeerList: state.masterBeerList.filter(beer => beer.id !== action.payload.id)
      }
    default:
      return state;
  }
};