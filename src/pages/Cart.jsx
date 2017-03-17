import React, { Component } from 'react';
import WrappedAdvancedSearchForm from "../components/Cart/search";
import SeniorSearch from "../components/Cart/seniorSearch";
import { Table, Icon ,Button,Modal,BackTop} from 'antd';
import Bus from './Bus';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

class Cart extends React.Component {
    state = {
        ModalText: 'Content of the modal dialog',
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            ModalText: 'The modal dialog will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }

    clickSearch =()=>{
        console.log(12312);
    }
    clickAdd =()=>{
        console.log('add');
        this.showModal();
    }
    render() {

        return (
            <div >

                <SeniorSearch clickSearch={this.clickSearch} placeholderName="e12e21" clickAdd={this.clickAdd} details={<WrappedAdvancedSearchForm/>}/>
                <Table  columns={columns} dataSource={data} bordered />
                <Modal title="Title of the modal dialog"
                       visible={this.state.visible}
                       onOk={this.handleOk}
                       confirmLoading={this.state.confirmLoading}
                       onCancel={this.handleCancel}
                >
                    <p>{this.state.ModalText}</p>
                </Modal>
            </div>
        );
    }
}
module.exports = Cart;
// export default Cart;