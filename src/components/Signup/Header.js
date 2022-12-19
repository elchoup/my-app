import React from "react";
import logoBlack from "../../assets/logo_black.png"
import groupoLogo from "../../assets/groupo_logo.png"

export default function Header() {
    return (
        <header>
            <div className="en_tete"> 
                <div className="rectangleLogo">             
                    <img src={logoBlack} alt="logo groupomania" className="fullLogo"/>
                    <img src={groupoLogo} alt="logo groupomania" className="halfLogo" />                  
                </div>        
            </div>
        </header>
    )
}