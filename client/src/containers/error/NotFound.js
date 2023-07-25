import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFound=()=> {
    return (
        <div className="bg-product">
            <Header />
            <div className="container col-md-8 text-center fix-margin">
                <h1 className="mt-5" style={{fontSize:120}}> 404 </h1>
                <h2 className="mb-4"> Not Found </h2>
                <p className="title mb-5" >ไม่พบหน้าที่ค้นหาครับ</p>
            </div>
            <Footer />
        </div>
    )
}
 
export default NotFound;