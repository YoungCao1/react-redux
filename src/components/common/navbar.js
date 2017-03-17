import React, { Component } from 'react';
import NavLink from './NavLink';
import { Icon } from 'antd';
import '../../styles/components/navbar.less';

export default class Navbar extends Component {
    state = {
        collapsed: false,
        mode: 'appNavbar'
    };
    pointerleave=()=>{
        $('.submenuDiv').css('display','none');
        $('.dropdown-toggle').removeClass('activeA');
    }

    hoverLi =(e,length)=>{
        console.log(e.target);

        var withs = length*116+'px';
        $('.dropdown-toggle').removeClass('activeA');
        $('.submenuDiv').css('display','none');
        $(e.target).parent().addClass('activeA');
        var  submenuDiv =  $(e.target).parent().parent().find('.submenuDiv');
        $(e.target).parent().parent().find('.submenuDiv').css('display','none');
        submenuDiv.css({'display':'block','width':withs});

    }
    clickHref =()=>{
        $('.submenuDiv').css('display','none');
        $('.dropdown-toggle').removeClass('activeA');
    };
    siderToggle =()=>{
        this.setState({
            collapsed: !this.state.collapsed,
            mode: !this.state.collapsed ? 'packNavbar ' : 'appNavbar'
        });
       if(this.state.collapsed){
           $('.App-childRoutes').css('padding-left','160px');
           $('.tabBarLocations').css('margin-left','140px');
       } else {
           $('.App-childRoutes').css('padding-left','70px');
           $('.tabBarLocations').css('margin-left','50px');
       }
    }

    render() {

        return (
            <aside className={this.state.mode} >
                <div  className="title " >
                    <a  >

                        <img src="/src/assets/images/222.jpg"/>
                    </a>
                </div>
                <section className="" onMouseLeave={this.pointerleave}>
                    <ul className="nav nav-list" >
                        <li className="liClass"  onMouseEnter={(e,length)=>this.hoverLi(e,1)}>
                            <a className="dropdown-toggle" >
                                <i className="fa fa-address-book"></i>
                                <span className="menu-text"> 按时吃撒村</span>
                            </a>
                            <div className="submenuDiv" >
                                <div className="menuDiv" >
                                    <div className="first">
                                        <div className="round"></div>
                                        <span> asdsad</span>
                                    </div>
                                    <ul className="submenu" >

                                        <li  className="singleLine"><NavLink to={{pathname: '/tacos/bus', search: '?name=chengpu', state: { mark: "sacac" }}} onClick={this.clickHref} className="jumpNavlist"> sacac </NavLink> </li>
                                        <li  className="singleLine"><NavLink to={{pathname: '/', state: { mark: false }}} onClick={this.clickHref} className="jumpNavlist"> 测测 </NavLink> </li>
                                    </ul>
                                    <div className="dashLine"></div>
                                </div>
                            </div>
                        </li>
                        <li className="liClass"  onMouseEnter={(e,length)=>this.hoverLi(e,3)}>
                            <a className="dropdown-toggle" >
                                <i className="fa fa-quora"></i>
                                <span className="menu-text"> xq西安市新</span>
                            </a>
                            <div className="submenuDiv" >
                                <div className="menuDiv" >
                                    <div className="first">
                                        <div className="round"></div>
                                        <span> asdsad</span>
                                    </div>
                                    <ul className="submenu"  >
                                        <li  className="singleLine"><NavLink to="/sandwiches" onClick={this.clickHref} className="jumpNavlist">sacac</NavLink></li>
                                        <li  className="singleLine"><a  onClick={this.clickHref} className="jumpNavlist"> 测测 </a> </li>
                                        <li  className="singleLine"><a  onClick={this.clickHref} className="jumpNavlist"> 测测 </a> </li>
                                        <li  className="singleLine"><a  onClick={this.clickHref} className="jumpNavlist"> 测测 </a> </li>
                                    </ul>
                                    <div className="dashLine" ></div>
                                </div>
                                <div className="menuDiv" >
                                    <div className="first">
                                        <div className="round"></div>
                                        <span> asdsad</span>
                                    </div>
                                    <ul className="submenu"  >
                                        <li  className="singleLine"><a  onClick={this.clickHref} className="jumpNavlist"> sacac </a> </li>
                                        <li  className="singleLine"><a  onClick={this.clickHref} className="jumpNavlist"> 测测 </a> </li>

                                    </ul>
                                    <div className="dashLine" ></div>
                                </div>
                                <div className="menuDiv" >
                                    <div className="first">
                                        <div className="round"></div>
                                        <span> asdsad</span>
                                    </div>
                                    <ul className="submenu"  >
                                        <li  className="singleLine"><a  onClick={this.clickHref} className="jumpNavlist"> sacac </a> </li>
                                        <li  className="singleLine"><a  onClick={this.clickHref} className="jumpNavlist"> 测测 </a> </li>

                                    </ul>
                                    <div className="dashLine" ></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <div className="sider-toggle" onClick={()=>this.siderToggle()}>
                    <Icon type={this.state.collapsed ? 'right' : 'left'}/>
                </div>
            </aside>

        );
    }
}
