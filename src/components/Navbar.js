import React from 'react';
import i18n from "../Translations";

const Navbar = () => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };    

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#myPage">
                    <img className="navbar-logo"alt="Farmer's Gate" src={require('../assets/farm.png')} />     
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#services">CROPS</a></li>
                        <li><a href="#portfolio">EQUIPMENTS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><a href="#" onClick={()=>changeLanguage("en")}>English</a></li>
                        <li><a href="#" onClick={()=>changeLanguage("hi")}>हिन्दी</a></li>
                        <li><a href="#" onClick={()=>changeLanguage("pu")}>ਪੰਜਾਬੀ</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;