import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavLink from './NavLink';
import {bindActionCreators} from 'redux';
import { tabBarDecrementAndRedirect } from '../../actions/commonAction'

class TabBar extends Component {
    render() {
        const {tabBarLocations, tabBarDecrementAndRedirect, routing} = this.props;
        const loopTabBars = (data) => (data.map((location, i) => {
            var active = 'tabbar-normal';
            if (routing.locationBeforeTransitions&&routing.locationBeforeTransitions.state&&routing.locationBeforeTransitions.state.mark&&(routing.locationBeforeTransitions.state.mark==location.state.mark)) {
                active = 'tabbar-active';
            }
            if (i == 0) {
                return <span className={`tabbar-cell ${active}`} key={location.state.mark}>
                        <NavLink to={location}>{location.state.mark}</NavLink>
                    </span>
            } else {
                return <span className={`tabbar-cell ${active}`} key={location.state.mark}>
                        <NavLink to={location}>{location.state.mark}</NavLink>
                        <i className="fa fa-close" onClick={()=>tabBarDecrementAndRedirect(location)}></i>
                   </span>
            }
            
        }
            
        ))
        return (
            <div className="tabBarLocations">
                {loopTabBars(tabBarLocations)}
            </div>
        );
    }
}
function mapState(state) {
    return {tabBarLocations: state.tabBarLocations, routing: state.routing};
}

function mapDispatch(dispatch) {
    return  {tabBarDecrementAndRedirect:bindActionCreators(tabBarDecrementAndRedirect, dispatch)}
}

export default connect(mapState, mapDispatch)(TabBar);