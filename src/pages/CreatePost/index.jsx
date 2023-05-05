import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../contexts/AuthContext'

import { Container } from './styles'

export const CreatePost = () => {

  const [post, setPost] = useState({
    title: "",
    image: "",
    body: "",
    tags: "",
    formError: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
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
      </form>
    </Container>
  )
}
