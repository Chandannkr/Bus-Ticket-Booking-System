import React from "react";
import "../../Styles/AdminHeader.css"

const Header = () =>{
    return(
        <div className="Header">
            <div className="logo">
                <h1>Air<span>Bus</span></h1>
            </div>
            <div className="AccountDetails">
                <button className="btn btn-danger fs-5">Account</button>
            </div>
        </div>
    )
}