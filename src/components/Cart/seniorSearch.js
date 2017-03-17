import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';

import '../../styles/components/seniorSearch.less';

class SeniorSearch extends React.Component {

    state={
        collapsed: false,
        mode:'none'
        }

    clickDetail =()=>{
        this.setState({
            collapsed: !this.state.collapsed,
            mode: !this.state.collapsed ? 'block ' : 'none'
        });
    }


   render() {

       const {clickSearch ,placeholderName,clickAdd,details} = this.props;

       return (

           <div className="seniorSearch">
               <div className="combinationSearch">
               <Row>
                   <Col span={6}>
                       <Input placeholder={placeholderName} />
                   </Col>
                   <Col span={6} style={{paddingLeft:50}}>
                       <Button type="primary" icon="search" onClick={clickSearch}>搜索</Button>
                       <span className="spanName" style={{paddingLeft:10}} onClick={this.clickDetail}>高级搜索</span>
                   </Col>
                   <Col span={12} style={{textAlign:'right'}} className="addBtn">
                       <i className="fa fa-plus-circle" onClick={clickAdd}>                               新增</i>
                   </Col>
               </Row>
               </div>
               <div style={{display:`${this.state.mode}`}} className="detailItems">
                   {details}
               </div>
           </div>
       )

    }

}
export default SeniorSearch;