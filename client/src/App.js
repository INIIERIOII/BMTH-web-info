import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import{ BrowserRouter,Route, Router , Switch } from "react-router-dom";
import Home from './components/Home';
import Store from './containers/Store';
import About from'./containers/About';
import Order from './containers/order/Order';
import Product from './containers/product/Product';
import NotFound from './containers/error/NotFound';
import ProductEdit from './containers/product/ProductEdit';
import Cart from './containers/Cart';
class App extends Component{

  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/add" component={ProductEdit} />
        <Route exact path="/products/edit/:id" component={ProductEdit} />
        <Route component={NotFound} />
      </Switch>
    )
  }

  render () {
    return (
     <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}


export default App;
// 0385