export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const deleteBeer = id => ({
  type: 'DELETE_BEER',
  payload: {
    id
  }
});

export const addBeer = beer => ({
  type: 'ADD_BEER',
  payload: beer // is already an object
});