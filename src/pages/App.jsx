import React, {Component} from 'react';
import NavLink from './NavLink'
import {BaseSubRouteConnent} from '../router/BaseSubRoute';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <NavLink to="/tacos">Tacos</NavLink>
            </li>
            <li>
              <NavLink to="/sandwiches">Sandwichessadfdsf</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
module.exports = BaseSubRouteConnent(App);
// export default App;
