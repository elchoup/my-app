import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import icoDelete from "../../assets/delete.png"
import icoEdit from "../../assets/edit.png"

 
    
export default function GetOnePost() {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    function getPost () {
      
        axios.get(
            ('http://localhost:3000/api/post/' + id),
            {headers : {
                'Authorization': 'Bearer ' + token
            }}
        )
        
        .then ( (result) => { 
            console.log(result)                             
            setPost(result.data)              
        })

    }

    useEffect(() => {     
        getPost()         
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


    function isOwnerOrAdmin (ownerId) {
        let isAdmin = localStorage.getItem("isAdmin")
        let isOwnerOrAdmin = false
        if(isAdmin === "true") {    
            return true
        }
        if(userId === ownerId ) {
            return true
        }
        return isOwnerOrAdmin
    }

    
    function isOwner()  {
        let owner = false
        console.log(post)
        if(post && (isOwnerOrAdmin(post.user._id))) {
            owner = true
        }
        return owner;
    }

    function hasLiked() {
        let like = false;
        if(post) {
            like = post.usersLiked.includes(userId)
        }
        return like;
    }

    function handleClick() {
        //todo mettre data à part et ne faire qu'un axios
        let likeValue;
        if(post && post.usersLiked.includes(userId)) {
            likeValue = 0
        }else{
            likeValue= 1
        }

        axios({
            method: 'post',
            url: "http://localhost:3000/api/post/" + id + '/like',
            data:{like: likeValue},
            headers : {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
                console.log(res.data)
                //todo: refaire un fetch post
                getPost() 
            })
        .catch(error => {
            console.log(error)
            alert(error.response.data.message)
        })
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
                                    {hasLiked() && <button className="like" onClick={handleClick}>Je n'aime plus</button>}
                                    {!hasLiked() && <button className="like" onClick={handleClick}>J'aime</button>}                              
                                { isOwner() && (
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
