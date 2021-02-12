import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditBeerForm(props) {
  const { beer } = props;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({ name: event.target.name.value, brand: event.target.brand.value, alcoholContent: event.target.alcoholContent.value, price: event.target.price.value, quantity: parseInt(event.target.quantity.value), id: beer.id });
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.alcoholContent.value);
    console.log(event.target.price.value);
    console.log(event.target.quantity.value);
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBeerFormSubmission}
        buttonText="Update Beer" />
    </React.Fragment>
  );
}

EditBeerForm.propTypes = {
  beer: PropTypes.object,
  onEditBeer: PropTypes.func
};

export default EditBeerForm;