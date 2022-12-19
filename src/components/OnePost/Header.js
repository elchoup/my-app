import React from "react";
import logoBlack from "../../assets/logo_black.png"
import groupoLogo from "../../assets/groupo_logo.png"
import { Link } from "react-router-dom";
import BackLogo from "../../assets/Back_logo.png"

export default function Header() {

    const pseudo = localStorage.getItem("pseudo")

    return (
        <header>
            <div className="en_tete"> 
                <Link to={"/userInfo"} className="compte">
                    <h2>{pseudo}</h2>
                </Link>
                <div className="rectangleLogo">             
                    <img src={logoBlack} alt="logo groupomania" className="fullLogo"/>
                    <img src={groupoLogo} alt="logo groupomania" className="halfLogo" />                  
                </div>
                <Link to="/home" className="Back_logo">
                        <img src={BackLogo} alt="Retour page d'acceuil" />
                        <p>Acceuil</p>
                </Link>         
            </div>
        </header>
    )
}