import React from "react"
import { Link } from "react-router-dom"
import logout from "../../assets/logout.png"

export default function InfoUser() {
    const pseudo = localStorage.getItem("pseudo")
    function handleLogout() {
        localStorage.clear()
    }
    return (
           <section>
                <div className="bloc_form">
                    <div className= "bloc_info">
                        <h1>Déconnexion</h1>
                        <p>Merci de votre visite {pseudo}. Vous deconnecter ?</p>
                        <Link to="/" className="btn_link"><button onClick={() => handleLogout()} className="btn_info"><img src={logout} alt="deconnexion logo" /> Déconnexion</button></Link>
                    </div>
                </div>
           </section>    
    )
}