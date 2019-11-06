import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
import { connect } from 'react-redux';





export class App extends Component {

  handleOnClick() {
    this.props.addRestaurant();
  }

  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => {dispatch(addRestaurant()) }
 }
}





export default connect(mapDispatchToProps)(App);
