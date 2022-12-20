import React, {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import "../../styles/Form.css"

export default function LoginForm() {
    const url ="http://localhost:3000/api/auth/login"
    const [data, setData] =useState({
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
            email: data.email,
            password: data.password
        })
        .then(res => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("userId", res.data.userId)
            localStorage.setItem("pseudo", res.data.userPseudo)
            localStorage.setItem("isAdmin", res.data.userAdmin)
            navigate("/home")
        })
        .catch(error => {
            console.log(error)
            alert(error.response.data.message)
        })
    }
    
            
        return(
            <section>
                <div className="bloc_form">
                    <article>
                        <form onSubmit={(e)=> submit(e)}>    
                            <h1>Connexion</h1>

                            <label htmlFor="email">Email</label> 
                            <input 
                            type="text" 
                            className="box_text"
                            placeholder="Entrer Pseudo" 
                            name="email"
                            value={data.email}
                            onChange= {(e) => handle(e)}
                            required />
                            
                            <label htmlFor="password">Mot de Passe</label>
                            <input type="text" 
                            className="box_text"
                            placeholder="Entrer Mot de Passe" 
                            name="password"
                            value= {data.password}
                            onChange= {(e) => handle(e)}
                            required />
                            
                            <div className="box_button">
                                <input type="submit" className="box_submit" value ='Connexion'></input>
                                <Link to="/signup" className="box_Link"><button type="button" className="box_submit_Link" >Inscription</button></Link>
                            </div>                          
                        </form>
                    </article>
                </div> 
            </section>
        )
    }
