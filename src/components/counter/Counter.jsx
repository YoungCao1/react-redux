import React, { Component, PropTypes } from 'react';
export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    greenColor: PropTypes.func.isRequired,
    yellowColor: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    redirect: PropTypes.func.isRequired
  };

  gotoRepos() {
      // this.props.redirect('repos');
      // this.props.dispatch({
      //     type: 'INCREMENT_COUNTER'
      // })
      // console.log(this.props)
  }
  render() {
    const { increment, incrementIfOdd, decrement, counter , color, greenColor, yellowColor, tabBarLocations} = this.props;
    
    return (
      <div style={{color: color}}>
        Clicked: {counter} times
        <button onClick={increment}>+</button>
        {tabBarLocations}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        <p>
          <button onClick={yellowColor}>yellow</button>
          <button onClick={greenColor}>green</button>
          <button onClick={(e)=> this.gotoRepos(e)}>gotoRepos</button>
        </p>
      </div>
      
    );
  }
}
