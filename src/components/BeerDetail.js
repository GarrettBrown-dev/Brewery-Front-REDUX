import React from 'react';
import PropTypes from 'prop-types';

function BeerDetail(props) {
  const { beer, onClickingDelete, onClickingPurchase } = props;
  return (
    <React.Fragment>
      <h1>Beer Details:</h1>
      <hr />
      <p>{beer.name}</p>
      <p>{beer.brand}</p>
      <p>{beer.alcoholContent}</p>
      <p>{beer.price}</p>
      <p>{beer.quantity}</p>
      <button onClick={() => onClickingPurchase()}>Purchase</button>
      <button onClick={props.onClickingEdit}>Update Item</button>
      <button onClick={() => onClickingDelete(beer.id)}>Delete</button>
    </React.Fragment>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPurchase: PropTypes.func
};

export default BeerDetail;