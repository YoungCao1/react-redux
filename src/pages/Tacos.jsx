import React, {Component} from 'react';
import NavLink from './NavLink';
import {BaseSubRouteConnent} from '../router/BaseSubRoute';
class Tacos extends Component {
    render() {
        return (
            <div>
                <h2>Tacos</h2>
                <ul>
                    <li>
                        <NavLink to="/tacos/bus">Bus</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tacos/cart">Cart</NavLink>
                    </li>
                </ul>
                <input type="text"/>
            </div>
        );
    }
}
module.exports = BaseSubRouteConnent(Tacos);
// export default Tacos;