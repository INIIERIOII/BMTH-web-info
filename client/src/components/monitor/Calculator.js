import React, { Component } from "react";

class Calculator extends Component {


    showOrders (orders) {
        if(! orders || orders.length == 0) {
            return <li className="text-right text-muted title">ไม่มีสินค้า</li>
        } else {
            return orders.map(order => {
                return(
                <li key={order.product.id} className="text-right primary title">
                       {order.product.productName} x {order.quantity} = {order.product.price * order.quantity}
                        <button className="btn btn-outline-dark btn-sm mt-2" onClick={() => this.props.onDelOrder(order.product)} > x </button>
                    </li>
                )
            })
        }
    }

    render(){
        const { totalPrice, orders } = this.props;
        return(
            <div className="card mt-4">
                <h1 className="display pink mt-4 text-center"> C A R T </h1>
                <h3 className="fix-magin pink text-right"> {totalPrice}</h3>
                <hr />
                <ul className="list-unstyled ">
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn-edit btn-block btn-secondary title " onClick={() => this.props.onConfirmOrder()}>ยืนยัน <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </button>
                <button className="btn btn-block btn-outline-light title" onClick={() => this.props.onCancelOrder()}>ยกเลิก <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
                    <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </button>
                <br/>
            </div>
        
        )
    }
}

export default Calculator;