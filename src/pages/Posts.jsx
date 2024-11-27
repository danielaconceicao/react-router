import { useEffect, useState } from 'react'

export default function Posts(){

    const [postData, setPostData] = useState([])

    function fetchPost(url = 'http://localhost:3001/posts') {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setPostData(data.data)
            })
    }

    useEffect(() => { fetchPost() }, [])
    
    return(
        <>
            <div className='container'>

                <form /* onSubmit={handleSubmit} */ className='py-5'>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                            id="image"
                            aria-describedby="imagehelper"
                            placeholder="/images/1.jpg"
                        /* value={formData.image}
                        onChange={handleChange} */
                        />
                        <small id="imagehelper" className="form-text text-muted"></small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            aria-describedby="titlehelper"
                            placeholder="Title blog"
                        /* value={formData.title}
                        onChange={handleChange} */
                        />
                        <small id="titlehelper" className="form-text text-muted"></small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>
                        <textarea
                            className="form-control"
                            id="Content"
                            rows="3"
                            name='content'
                        /* value={formData.content}
                        onChange={handleChange} */
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="tags" className="form-label">Tags</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tags"
                            id="tags"
                            aria-describedby="tagshelper"
                            placeholder="Antipasti, Ricette vegetariane, Ricette al forno"
                        /*  value={formData.tags}
                         onChange={handleChange} */
                        />
                        <small id="tagshelper" className="form-text text-muted"></small>
                    </div>

                    <div className="form-check mb-3">
                        <input
                            id="published"
                            name='published'
                            type="checkbox"
                            className="form-check-input"
                        /* value={formData.published}
                        onChange={handleChange} */

                        />
                        <label className="form-check-label" htmlFor=""> Published </label>
                    </div>


                    <button
                        type="submit"
                        className="btn btn-secondary"
                    >
                        {/*  {formData.id ? 'Update Post' : 'Create Post'} */}
                        Submit
                    </button>
                </form>

                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {postData.map(post => (
                        <div className='col py-3' key={post.id}>
                            <div className='card'>
                                <img src={`http://localhost:3001/image/${post.image}`} className='card-img-top' />
                                <div className='card-body'>
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">Ricetta: {post.content}</p>
                                    <p className="card-text">Tags: {post.tags.join(', ')}</p>
                                    <p className='card-text'>Published: {post.published ? 'Publishable' : 'Unpublishable'}</p>
                                    <div>
                                        <button /* onClick={() => handleEdit(post)} */ type='button' className='btn btn-primary mx-2'><i className="bi bi-pencil">edit</i></button>
                                        <button /* onClick={() => handleDelete(post.slug)} */ type='button' className='btn btn-primary'><i className="bi bi-trash3">Delete</i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}