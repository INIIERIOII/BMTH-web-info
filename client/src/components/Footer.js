import React from "react";

const Footer = (props) => {
        const {Company, Email} = props;

    return (
        
    <div className="container-fluid ">
            <hr/>
            <div className="text-center title text-uppercase card-indigo">
                <small>
                <span className="text-danger"> Powered By {props.Company}</span> | <span className="text-light">Contact By Email :{props.Email} </span>
                </small>
            </div>
    </div>
    )
}

export default Footer;