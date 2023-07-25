import React, { Component } from 'react';
import Header from '../components/Header';
import App from '../App';
import Monitor from '../components/monitor/Monitor';
import Footer from '../components/Footer';
import{ connect } from "react-redux";
import { productsFetch } from "../actions";

class Store extends Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
   this.props.productsFetch();
}
  render () {
    return (
      
      <div className='BACK-pink fix-margin'>
      <Header/>
      <div className='row'>
      <div className='col-1 BACK-white'/>  
        <div className="container card mt-4 ">  
            <div className='col BACK title wh mt-4'>        
                <h1> S T O R E </h1>
            </div>
              {this.props.products && Array.isArray(this.props.products)&& 
              <Monitor products={this.props.products}/>
              } 
        
        <Footer/>
                </div>
                <div className='col-1 BACK-white'/>

                </div>
                </div>
    )
  }
}

function mapStateToProps({products}){
  return { products };
}

export default connect(mapStateToProps, { productsFetch }) (Store);