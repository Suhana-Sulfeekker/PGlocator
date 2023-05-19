import React from "react";
import "./Login.css";
import google from '../../images/google.png'
import logo from '../../images/logo.png'

export default function Login(){
    return(
        <div className="login">
            <div className="login-cont">
                <div className="login-head">
                    <img alt="" src={logo}></img>
                    
                    <p>
                        Find your perfect PG in seconds with PGLocator. The ultimate time-saving app for finding nearby PGs! Homely and affordable PGs one click away. 
                    </p>
                </div>

                <div className="login-button">
                    <button className="login-btn">
                        <img alt="" src={google}></img>
                        <p>Sign up with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
}