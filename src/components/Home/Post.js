import React, {useState, useEffect} from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import "../../styles/Post.css"
import like from "../../assets/like.png"

export default function Post() {
const [data, setData] = useState([])
//Similaire à componentDidMount et componentDidUpdate
useEffect(() => {
    const fetchData = async () => {
        const token = localStorage.getItem('token');
        console.log(token)
        const result = await axios.get(
            'http://localhost:3000/api/post',
            {headers : {
                'Authorization': 'Bearer ' + token
            }}
        )
        console.log(result.data)
        
        const post = result.data.sort((a,b) => (a < b ? 1 : -1))     
        setData(post)
    }
    fetchData()
    
}, [])

    return (
        
        <div id="page">
            <section className="main">
                <article  >
                    <ul className="post">
                        {data.map(item =>(
                            <Link key={item._id} to= {`/${item._id}` }  className="post--link">
                                <li  className="post--box">
                                    <div>
                                        <div className="post--box--titre">
                                            <h1>Ajouté par: {item.user.pseudo} </h1>
                                            <p>le {item.postDate}</p>
                                        </div>
                                        <div className="post--box--contenu">
                                            <img src={item.imageUrl} alt="salut"/>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="post--box--like">
                                            <img src={like} alt="logo bouton like" />
                                            <p>{item.usersLiked.length} personnes aiment ça</p>                       
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </article>
            </section>
        </div>
    )
}