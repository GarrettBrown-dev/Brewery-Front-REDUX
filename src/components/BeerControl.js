import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';
import EditBeerForm from './EditBeerForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBeer: null,
      editing: false
    };
  }

  handleAddingNewBeerToList = (newBeer) => {
    const { dispatch } = this.props;
    const action = a.addBeer(newBeer);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
    this.setState({ selectedBeer: selectedBeer });
  }

  handleDeletingBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== id);
    this.setState({
      masterBeerList: newMasterBeerList,
      selectedBeer: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingBeerInList = (beerToEdit) => {
    const editedMasterBeerList = this.state.masterBeerList
      .filter(beer => beer.id !== this.state.selectedBeer.id)
      .concat(beerToEdit);
    this.setState({
      masterBeerList: editedMasterBeerList,
      editing: false,
      selectedBeer: null
    });
  }

  handlePurchasingBeerInlist = () => {
    const selectedBeer = this.state.selectedBeer;
    const newQuantity = Object.assign({}, selectedBeer, { quantity: selectedBeer.quantity - 1 });
    const newBeerList = this.state.masterBeerList
      .filter(beer => beer.id !== this.state.selectedBeer.id)
      .concat(newQuantity);
    this.setState({
      masterBeerList: newBeerList,
      selectedBeer: newQuantity
    });
  }

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState({
        selectedBeer: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState =
        <EditBeerForm
          beer={this.state.selectedBeer}
          onEditBeer={this.handleEditingBeerInList} />
      buttonText = "Return to Beer List";
    } else if (this.state.selectedBeer != null) {
      currentlyVisibleState =
        <BeerDetail
          beer={this.state.selectedBeer}
          onClickingDelete={this.handleDeletingBeer}
          onClickingEdit={this.handleEditClick}
          onClickingPurchase={this.handlePurchasingBeerInlist}
        />
      buttonText = "Return to Beer List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm
        onNewBeerCreation={this.handleAddingNewBeerToList}
        onEditBeer={this.handleEditingBeerInList} />
      buttonText = "Return to Beer List";
    } else {
      currentlyVisibleState = <BeerList
        beerList={this.state.masterBeerList}
        onBeerSelection={this.handleChangingSelectedBeer} />;
      buttonText = "Add Beer";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

BeerControl.PropTypes = {
  masterBeerList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterBeerList: state.masterBeerList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

BeerControl = connect(mapStateToProps)(BeerControl);

export default BeerControl;