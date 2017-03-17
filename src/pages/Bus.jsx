import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;
class Bus extends Component {

    
    render() {
        return (
            <h3>
                Bus
                <input type="text"/>
            </h3>
        );
    }
}
module.exports = Bus;
// export default Bus;