import { TABBAR_INCREMENT, TABBAR_DECREMENT } from '../constants/ActionTypes';
import {initializationLocations} from '../router/routerConfig';

export default (state=initializationLocations?initializationLocations.concat():[], action) => {
    switch (action.type) {
        case TABBAR_INCREMENT: {
            for (var i = 0; i < state.length; i++) {
                var location = state[i];
                if(location.state.mark == action.currentLocation.state.mark) {
                    return state.concat();
                }
            }
            state.push(action.currentLocation);
            return state.concat();
        } 
        case TABBAR_DECREMENT: {
            for (var i = 0; i < state.length; i++) {
                var location = state[i];
                if(location.state.mark == action.currentLocation.state.mark) {
                    state.splice(i, 1)
                    return state.concat()
                }
            }
        }     
        default:
            return state;
    }
}