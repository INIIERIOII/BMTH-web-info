import React, { Component } from 'react';
import Header from '../components/Header';
import App from '../App';
import{ connect } from "react-redux";

class Home extends Component{
    constructor(props){
      super(props);
  
    }
    render () {
      return (
        <div className='BACK-home fix-margin'>
        <Header/>
        <div className='row container-fluid '>
          <div className="col-4 BACK-white">
              <div className='title'>        
              <br/>
              <div className='col-12 mt-3 font-home'>
              <h1 > W E </h1> 
              <h1 > H A V E </h1>
              <h1 className='indigo'> L E G E N D </h1>
              <h1> H E R E </h1>
              <a class="btn btn-lg btn-secondary-1 title" href="http://localhost:3000/store" role="button"> GET NOW</a>
              <br/><br/>
              <a class="btn btn-lg btn-dark-1 title" href="http://localhost:3000/about" role="button">ABOUT </a>
                  <br/><br/><br/><br/><br/><br/>
              </div>
              </div>
              </div>
              <div className='col-1 BACK-pink'/>
              <div className='col-1 BACK-indigo'/>
              <div className='col mt-4'>
                       <img src="/images/logo/sale.gif" class="img-home mt-5 rounded mx-auto d-block " alt=""></img>
               </div>
               </div>
              </div>
      )
    }
  }
  
  export default Home;