import React, {Component} from 'react';

export const BaseSubRouteConnent = (Component) => {return class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            children,
            ...props
        } = this.props;
        return (
            <div>
                <Component {...props} /> {children}
            </div>
        );
    }
}}
