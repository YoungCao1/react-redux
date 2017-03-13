import {YELLOW_COLOR, GREEN_COLOR} from '../constants/ActionTypes';
export default  (state='yellow', action) => {
    switch (action.type) {
        case YELLOW_COLOR:
            return 'yellow';
        case GREEN_COLOR:
            return 'green';    
        default:
            return state;
    }
};
