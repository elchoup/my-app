import React from "react";
import logoBlack from "../../assets/logo_black.png"
import addLogo from "../../assets/Add_logo.png"
import { Link } from "react-router-dom";

export default function Header() {

    const pseudo = localStorage.getItem("pseudo")
    return (
        <header>
            <div className="en_tete"> 
                <div className="compte">
                    <h2>{pseudo}</h2>
                </div>
                <div className="rectangleLogo">             
                    <img src={logoBlack} alt="logo groupomania" />                  
                </div>
                <Link to={"/createPost"} className="ajoutPost">
                    <p>Ajouter un post</p>
                    <img src={addLogo} alt="Ajouter un post" />      
                </Link>           
            </div>
        </header>
    )
}