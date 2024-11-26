import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Jumbotron from "../components/Jumbotron"

export default function Post(){
    const [post, setPost] = useState(null)
    const { id } = useParams()
    const url = `http://localhost:3001/post/${id}`

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setPost(data.data)
            })
            .catch(err => {
                console.log(err)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
           {
            post ? (
                <div>
                        <Jumbotron title={post.image} description={post?.description} bgImageUrl={`http://localhost:3001/${post.image}`}/>
                        <img src={`http://localhost:3001/${post.image}`} alt="" />
                </div>
            ) : (<p>Loading...</p>)
           }
        </>
    )
}