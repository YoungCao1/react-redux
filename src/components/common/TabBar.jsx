import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavLink from './NavLink';
import {bindActionCreators} from 'redux';
import {tabBarDecrementAndRedirect, linkTo} from '../../actions/commonAction'
import '../../styles/components/tabBar';

class TabBar extends Component {
    linkTo(e, actions, location) {
        e.stopPropagation()
        actions.linkTo(location)
    }
    tabBarDecrementAndRedirect(e, actions, location) {
        e.stopPropagation()
        actions.tabBarDecrementAndRedirect(location)
    }
    
    render() {
        const {tabBarLocations, actions, routing} = this.props;
        const loopTabBars = (data) => (data.map((location, i) => {
            var active = 'tabbar-normal';
            if (routing.locationBeforeTransitions && routing.locationBeforeTransitions.state && routing.locationBeforeTransitions.state.mark && (routing.locationBeforeTransitions.state.mark == location.state.mark)) {
                active = 'tabbar-active';
            }
            if (i == 0) {
                return <span onClick={(e)=>{this.linkTo(e, actions, location)}} className={`tabbar-cell ${active}`} key={location.state.mark}>
                    {location.state.mark}
                </span>
            } else {
                return <span onClick={(e)=>{this.linkTo(e, actions, location)}} className={`tabbar-cell ${active}`} key={location.state.mark}>
                    {location.state.mark}
                    <i className="fa fa-close" onClick={(e)=>{this.tabBarDecrementAndRedirect(e, actions, location)}}></i>
                </span>
            }
        }))
        
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
    return {
        actions: bindActionCreators({tabBarDecrementAndRedirect,linkTo}, dispatch)
    }
}

export default connect(mapState, mapDispatch)(TabBar);