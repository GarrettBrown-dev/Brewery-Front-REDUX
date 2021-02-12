import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewBeerForm(props) {

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      alcoholContent: event.target.alcoholContent.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.alcoholContent.value);
    console.log(event.target.price.value);
    console.log(event.target.quantity.value);
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBeerFormSubmission}
        buttonText='Add Beer' />
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;