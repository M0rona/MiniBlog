import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../contexts/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

import { Button } from '../../styles/Buttons'
import { Container } from './styles'

export const CreatePost = () => {

  const [post, setPost] = useState({
    title: "",
    image: "",
    body: "",
    tags: "",
    formError: ""
  })

  const user = useAuthValue()
  const navigate = useNavigate()

  const { insertDocument, response } = useInsertDocument("posts")

  const handleSubmit = (e) => {
    e.preventDefault();
    setPost({
      ...post,
      formError: ""
    })

    try {
      new URL(post.image) 
    } catch (error) {
      setPost({
        ...post,
        formError: "A imagem precisa ser uma URL"
      })
    }

    const tagsArray = post.tags.split(",").map((tag) => tag.trim().toLowerCase())

    if(!post.title || !post.image || !post.body || !post.tags) {
      setPost({
        ...post,
        formError: "Por favor, preencha todos os campos!"
      })
    }

    if(post.formError) return

    insertDocument({
      title: post.title,
      image: post.image,
      body: post.body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    navigate("/")

  }

  return (
    <Container>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo:</span>
          <input 
            type="text" 
            name='title' 
            required 
            placeholder="Pense num bom título..."
            onChange={(e) => setPost({
              ...post,
              title: e.target.value
            })}
            value={post.title} 
          />
        </label>

        <label>
          <span>URL da imagem:</span>
          <input 
            type="text" 
            name='image' 
            required 
            placeholder="Insira uma imagem que represente o seu post"
            onChange={(e) => setPost({
              ...post,
              image: e.target.value
            })}
            value={post.image} 
          />
        </label>

        <label>
          <span>Conteúdo:</span>
          <textarea 
            name='body' 
            required 
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setPost({
              ...post,
              body: e.target.value
            })}
            value={post.body} 
          />
        </label>

        <label>
          <span>Tags:</span>
          <input 
            type="text" 
            name='tags' 
            required 
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setPost({
              ...post,
              tags: e.target.value
            })}
            value={post.tags} 
          />
        </label>

        {(response.error || post.formError) && (
          <p className="error">{response.error || post.formError}</p>
        )}

        <div>

          { !response.loading && <Button type="submit" variant="green">Criar</Button> }
          { response.loading && <Button type="submit" variant="green" disabled>Aguarde...</Button> }

        </div>
      </form>
    </Container>
  )
}
