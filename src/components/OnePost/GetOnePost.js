import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import icoDelete from "../../assets/delete.png"
import icoEdit from "../../assets/edit.png"

 
    
export default function GetOnePost() {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [isOwner, setIsOwner] = useState(false)
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
      
            await axios.get(
                ('http://localhost:3000/api/post/' + id),
                {headers : {
                    'Authorization': 'Bearer ' + token
                }}
            )
            
            .then ((result) => {
                console.log(result)
                const Owner = () => {
                    if (result.data.user._id === userId){
                        setIsOwner(!isOwner)
                    }
                } 
                Owner()
                setPost(result.data)   
            })
            
        }
        fetchData()
        
       
        //console.log(post)
        
    }, []) 

    async function handleDelete() {
        await axios.delete(
            ('http://localhost:3000/api/post/' + id),
            {headers : {
                'Authorization': 'Bearer ' + token
            }}
        )
        navigate('/home')       
    }
    
    

    return(
        <div id="page">
            {post &&(
                <section className="main">
                    <article>
                        <div className="post">
                            <div className="post--box">
                                <div className="post--box--titre">
                                    <h1>Ajouté par: {post.user.pseudo} </h1>
                                    <p>le {post.postDate}</p>
                                </div>
                                <div className="post--box--contenu">
                                    <img src={post.imageUrl} alt="post"/>
                                    <p>{post.description}</p>
                                </div>
                                <div className="actionBtn">
                                    <div className="like">J'aime</div>
                                { isOwner && (
                                    <div className="action--log">
                                        <Link to= {`/modif/${post._id}` } >
                                            <button className="log"><img src={icoEdit} alt="modifier" /></button>
                                        </Link>
                                        <button onClick= {handleDelete} className="log"><img src={icoDelete} alt="supprimer" /></button> 
                                    </div>                           
                                )}
                                </div>      
                            </div>
                        </div>
                    </article>
                </section>
            )}
        </div>
    )

}
