import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/Form.css"


export default function ModifyForm () {
    const [description, setDescription] =useState("")

    const [image, setImage] = useState("")
    
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        console.log(description)
        console.log(image)
    }, [description, image])

    async function handleSubmit(e) {
        e.preventDefault()
        const token = localStorage.getItem('token');
        
        const formData = new FormData()
        const post = {"description" : description}
        formData.append("post", JSON.stringify(post))
        formData.append('image', image)
        await axios({
            method: 'put',
            url: "http://localhost:3000/api/post/" + id,
            data:formData,
            headers : {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data '
            }
        })
       .then(res => {
            console.log(res.data)
            navigate('/home')
        })
        .catch(error => {
            console.log(error)
            alert(error.response.data.message)
        })
    }
    


    
    return(
        <section>
            <div className="bloc_page">
                <article>
                    <div className="bloc_form">
                        <form onSubmit={handleSubmit}>
                            <h1>Nouveau Post</h1>
                            <label htmlFor="image">Ajouter une image:</label>
                            <input 
                            type="file" 
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                             />
                            <label htmlFor="description">Ajouter une description:</label>
                            <input 
                            type="text" 
                            className="box_description"
                            name="description" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                             />
                            <input type="submit" value="Poster" className="box_submit"/> 
                        </form>
                        
                    </div>
                </article>
            </div>
        </section>
    )
}