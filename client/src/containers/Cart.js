import React, { Component } from 'react';
import Header from '../components/Header';
import App from '../App';
import Monitor from '../components/monitor/Monitor';
import ProductList from '../components/product/ProductList';
import Footer from '../components/Footer';
import{ connect } from "react-redux";
import { productsFetch } from "../actions";

class Cart extends Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
   this.props.productsFetch();
}
  render () {
    return (
      <div className='bg-product fix-margin'>
      <Header/>
        <div className="container-fluid card">
          <div className='row'>
          <div className='col-1 BACK-indigo'/>
            <div className=' col title mt-4'>        
                <h1 className='pink'> STORE </h1>
                {this.props.products && Array.isArray(this.props.products)&& 
              <Monitor products={this.props.products}/>
              }           
           </div>  
           <div className='col-1 BACK-pink'>
           </div>
           </div>   
        </div>
        <Footer/>
                </div>  
    )
  }
}

function mapStateToProps({products}){
  return { products };
}
export default connect(mapStateToProps, { productsFetch }) (Cart);