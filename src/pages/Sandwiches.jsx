import React, { Component } from 'react';
import CounterApp from '../components/counter/CounterContainer';
class Sandwiches extends Component {
    
    render() {
        return (
            <div>
                <h2>Sandwiches</h2>
                <CounterApp />
            </div>
            
        );
    }
}
module.exports = Sandwiches;
// export default Sandwiches;