import React from "react";
import logoBlack from "../../assets/logo_black.png"
import { Link } from "react-router-dom";
import BackLogo from "../../assets/Back_logo.png"

export default function Header() {
    return (
        <header>
            <div className="en_tete"> 
                <div className="compte">
                    <h2>Matthieu Hertaut</h2>
                </div>
                <div className="rectangleLogo">             
                    <img src={logoBlack} alt="logo groupomania" />                  
                </div>
                <Link to="/home" className="Back_logo">
                        <img src={BackLogo} alt="Retour page d'acceuil" />
                        <p>Acceuil</p>
                </Link>         
            </div>
        </header>
    )
}