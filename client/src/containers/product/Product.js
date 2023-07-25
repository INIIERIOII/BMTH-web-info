import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import { withRouter } from "react-router-dom";
import{ connect } from "react-redux";
import { productsFetch,productDelete } from "../../actions";

class Product extends Component {

    constructor(props) {
        super(props);
        this.delProduct=this.delProduct.bind(this);
        this.editProduct=this.editProduct.bind(this);
    }
componentDidMount() {
    this.props.productsFetch();
}

editProduct(product) {
    this.props.history.push('products/edit/' + product.id);

}

delProduct(product){
    this.props.productDelete(product.id);
}

    render () {
        return (
            <div className="bg-product fix-margin">
                <Header />
                <div className="container card mt-5">
                     <div className='row'>
                        <div className='col mt-1'>
                            <h1>Product</h1>
                        </div> 
                        <div className="row">    
                        <div className="col-1"></div>   
                        <div className="col">
                        {this.props.products && Array.isArray(this.props.products) &&
                    <ProductList products={this.props.products}
                        onDelProduct={this.delProduct} onEditProduct={this.editProduct}
                    />
                     }
                        </div> 
                        <div className="col-1"></div>   
                        </div>  
                <Footer />
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({products}) {
    return { products };
}

export default withRouter( connect(mapStateToProps, {productsFetch, productDelete})(Product));
//สุเมธี 0385