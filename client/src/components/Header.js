import React, {Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state ={date : new Date()};
        setInterval(() => this.tick(), 1000);
    }
    componentDidMount(){
        this.timerID =setInterval(() => this.tick(), 1000)
    }

    componentDidUpdate(){
        
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({date : new Date()});
    }

    render(){
        return (       
            <div className="container-fluid text-right">            
                <div className="row">
                <div class="col">
                <nav class="navbar navbar-expand-lg shadow-lg p-3 mb-5 BACK fixed-top">
                        <a class="navbar-brandclass=" nav-link href="http://localhost:3000"> <img src="/images/logo/logo.svg" alt="" /> </a>          
                                <div class="navbar-nav">
                                    <a class="nav-link text-light" href="http://localhost:3000/store"> Store <span class="sr-only">(current)</span></a>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">|</a>
                                    </li>
                                    <a class="nav-link text-light" href="http://localhost:3000/orders">Order</a>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">|</a>
                                    </li>
                                    <a class="nav-link text-light" href="http://localhost:3000/about">About</a> 
                                    <li class="nav-item">
                                        <a class="nav-link disabled">|</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="http://localhost:3000/products">EDIT</a>
                                        <a class="dropdown-item" href="http://localhost:3000/products/add">ADD</a>
                                        </div>
                                    </li>                   
                                </div>
                                <h5 className="col-md 1 indigo mt-2">{this.state.date.toLocaleTimeString()}</h5>
                                <img src="/images/pro/new.jpg" class="rounded-circle" alt="..."></img>                                                          
                            </nav>    
                 </div>
                </div>
                </div>
        );
    }
}

//0385
export default Header;