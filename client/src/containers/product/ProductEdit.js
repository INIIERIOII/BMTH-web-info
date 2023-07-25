import React, { Component } from "react";
import { connect } from "react-redux";
import { productCreate,productUpdate,productFetch } from "../../actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductForm from "../../components/product/ProductForm";

class ProductEdit extends Component {
    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id);
        }
    }

    render() {
        const { formValues, match, products, productCreate, productUpdate } = this.props;
        return (
            <div>
                <div className="bg-product fix-margin">
                <Header />
                <div className="container col-md-5 mt-4">
                    {match.path.indexOf("add") > 0 && (
                        <div className=" card">
                            <h1>ADD</h1>
                            {
                            products.saved && (
                                <div className="alert-secondary title" role="alert">
                                    {products.msg}
                                </div>
                            )
                            }
                        <ProductForm onProductSubmit={() => productCreate (formValues)}/>
                        </div>
                    )}

                    {match.path.indexOf("edit") > 0 &&  (
                         <div className="card">
                         <h1>EDIT</h1>
                         {
                         products.saved && (
                                <div className="alert-secondary title" role="alert">
                                    {products.msg}
                                </div>
                            )
                         }
                         <ProductForm onProductSubmit={() => productUpdate ( products.id, formValues )}/>
                     </div>
                    )}
                </div>
                <Footer />
                </div>
             </div>
        );
    }
}

function mapStateToProps( {form, products} ) {
    return { formValues: form.productForm ? form.productForm.values : null, products };
}

export default connect(mapStateToProps, {productCreate,productUpdate,productFetch}) (ProductEdit);