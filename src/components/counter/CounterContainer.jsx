import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter';
import * as CounterActions from '../../actions/CounterActions';

class CounterApp extends Component {
  render() {
    const { counter, dispatch , color} = this.props;
    return (
      <Counter counter={counter} color={color} dispatch = {dispatch}
               {...bindActionCreators(CounterActions, dispatch)} />
    );
  }
}

function select(state) {
  return {
    counter: state.counter,
    color: state.changeColor,
    tabBarLocations: state.tabBarLocations
  };
}
export default connect(select)(CounterApp);
