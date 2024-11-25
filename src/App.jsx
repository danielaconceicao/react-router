import { useEffect, useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [postData, setPostData] = useState([])

  function fetchPost(url = 'http://localhost:3001/posts'){
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setPostData(data.data)
    })
  }

  useEffect(() => {fetchPost()}, [])

  return (
    <>
    <div className='container'>
      <Header/>
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

export default App
