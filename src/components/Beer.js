import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <>
      <div onClick={() => props.whenBeerClicked(props.id)}>
        <p>{props.name}</p>
      </div>
    </>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
};

export default Beer;