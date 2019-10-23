import React from 'react';
import profile_icon from './images/profile_close_2.svg'
import bag_icon from './images/bag_3.svg'
import search_icon from './images/search-icon.svg'
import './Nav.css'


export default function Nav() {
    return (
        <div className="header">
        <div className="line1">
            <div className="preferences">
                <select name="language" defaultValue={"french"} id="language">
                    <option value="english">EN</option>
                    <option value="french">FR</option>
                </select>
                <select name="currency" id="currency" defaultValue={"dollar"} >
                    <option value="dollar">USSD</option>
                    <option value="naira">NGN</option>
                </select>
            </div>

            <div className="customer-info">
                <span> <img src={profile_icon} alt="" />My Profile</span>
                <span> <img src={bag_icon} alt="" /> 0 Items $0.00</span>
                <span><img src={search_icon} alt="" /></span>
            </div>
        </div>



            <a className="navbar-brand text-danger d-flex justify-content-center" href='/'><h2>BOUNCER</h2></a>
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href='/'>HOME <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/'>STORE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/'>IPHONE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/'>IPAD <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/'>MACBOOK</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/'>ACCESSORIES</a>
                    </li>
                </ul>
            </div>
        </nav>


    </div>
    );
}