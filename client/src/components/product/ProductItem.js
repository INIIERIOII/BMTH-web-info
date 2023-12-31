import React, { Component } from "react";

class ProductItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {productName, price, thumbnail,artist,song} = this.props.product;
        return(
            
            <div className="col-md-4 col-sm-6 mt-4">
                <div className="White">
                <img className="img=fluid img-thumbnail1 mt-1 ms-1" src={thumbnail}></img>
                <h3 className="mt-1 text-dark">{productName}</h3>
                <p className="title indigo text-left ">{artist}</p>
                <p className="title text-secondary text-right ">{song} song </p>
                <hr/>
                <h5 className=" indigo text-right ">{price} THB</h5>
                {this.props.onAddOrder &&
                <button className="btn btn-block btn-dark title" value={price} onClick={() => this.props.onAddOrder(this.props.product)}>
                    BUY <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                        </svg>
                </button>
                 }
                 
                {(this.props.onDelProduct || this.props.onEditProduct) &&
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onEditProduct(this.props.product)}>
                    แก้ไข  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                </button>
                }

                {(this.props.onDelProduct || this.props.onEditProduct) &&
                <button className="btn  btn-block btn-dark  float-right title" value={price} onClick={() => this.props.onDelProduct(this.props.product)}>
                    ลบ 
                </button>
                 }

                </div>
              
            </div>
        )
    }
}

export default ProductItem;
