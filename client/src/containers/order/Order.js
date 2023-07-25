import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import{ connect } from "react-redux"
import { ordersFetch, orderDelete } from "../../actions";

class Order extends Component {

    constructor(props ){
    super( props);
    }
componentDidMount() {
        this.props.ordersFetch();
    }

    delOrder(order){
        this.props.orderDelete(order.id);
    }

showOrders(){
    return this.props.orders && this.props.orders.map(order =>{
        const date = new Date(order.orderedDate)
        return(
        
            <div key = {order.id} className="col-md-3 ">
                <hr/>
                <p className="text-right">
                    <button className="btn btn-dark btn-sm title" onClick={() => this.delOrder(order)}> X </button>
                </p>
                <div className="card-indigo">
                <h5> วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                <hr/>
                <ul>
                    {order.orders && order.orders.map(record => {
                        return ( <li key = {record.product.id}>
                            {record.product.productName} x {record.quantity} = {record.product.price * record.quantity}
                        </li>
                        )
                    })}
                </ul>
                </div>
                <p className="title pink">ยอดรวม {order.totalPrice}</p>
            </div>
           
        )
    })
}

render() {
    return (
        <div className="bg-product fix-margin">
            <Header />
            <div className="container card mt-5">
                <h1> Order </h1>
                <div className="row ">
                    {this.showOrders()}
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}

function mapStateToProps({orders}) {
    return { orders };
}

export default connect(mapStateToProps, {ordersFetch,orderDelete})(Order);