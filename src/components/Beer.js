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
  alcoholContent: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
};

export default Beer;