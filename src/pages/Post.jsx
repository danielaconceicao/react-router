import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Jumbotron from "../components/Jumbotron"


export default function Post() {
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const { id } = useParams()
    const url = `http://localhost:3001/posts/${id}`
    console.log(url)

    useEffect(
        () => {
            fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    const key = Object.keys(data)
                    if (key.includes('error')){
                        navigate("/404")
                    }else{
                        setPost(data.data)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    return (
        <>
            {
                post ? (
                    <div>
                        <Jumbotron title={post.title} bgImageUrl={`http://localhost:3001/image/${post.image}`} />

                        <section className="post">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="card  border-0 rounded-4 shadow-lg img-max-width">
                                            <img className="card-img-top rounded-4" src={`http://localhost:3001/image/${post.image}`} />
                                        </div>
                                        <div className="col">
                                            <h3>{post.title}</h3>
                                            <div>
                                                <p>{post.content}</p>
                                                <p>{post.tags.join(', ')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                ) : (<p>Loading...</p>)
            }
        </>
    )
}