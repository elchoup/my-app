import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import "../../styles/Form.css"


export default function SignupForm() {
    const url ="http://localhost:3000/api/auth/signup"
    const [data, setData] = useState({
        pseudo:"",
        email:"",
        password:""
    })

    const navigate = useNavigate()

    function handle(e) {
        const newData = {...data}
        newData[e.target.name] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(e) {
        e.preventDefault()
        axios.post(url, {
            pseudo: data.pseudo,
            email: data.email,
            password: data.password
        })
        .then(res => {
            console.log(res.data)
            navigate("/")
        })
        .catch(error => {
            console.log(error)
            return alert(error.response.data)
        })
    }

    return(
        <section >
            <div className="bloc_form">
                <article>                   
                    <form onSubmit={(e) => submit(e)}>
                        <h1>Inscription</h1>
                        
                        <label htmlFor="pseudo">Pseudo</label>
                        <input 
                        type="text" 
                        className="box_text"
                        placeholder="Entrer Pseudo" 
                        name="pseudo" 
                        value= {data.pseudo} 
                        onChange={(e) => handle(e)} 
                        required />

                        <label htmlFor="email">Email</label> 
                        <input 
                        type="text" 
                        className="box_text"
                        placeholder="Entrer Email" 
                        name="email" 
                        value= {data.email}
                        onChange={(e) => handle(e)} 
                        required />
                        
                        <label htmlFor="password">Mot de Passe</label>
                        <input 
                        type="text" 
                        className="box_text"
                        placeholder="Entrer Mot de Passe" 
                        name="password" 
                        value= {data.password}
                        onChange={(e) => handle(e)} 
                        required />
                        
                        <div className="box_button">
                            <input type="submit" className="box_submit" value="Inscription"></input>
                            <Link to="/" className="box_Link" ><button type="button" className="box_submit_Link" >Connexion</button></Link>
                        </div>
                    </form>               
                </article>
            </div>
        </section>
    )
    
}
