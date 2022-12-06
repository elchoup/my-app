import React from "react";
import logoBlack from "../../assets/logo_black.png"

export default function Header() {
    return (
        <header>
            <div className="en_tete"> 
                <div className="rectangleLogo">             
                    <img src={logoBlack} alt="logo groupomania" />                  
                </div>        
            </div>
        </header>
    )
}