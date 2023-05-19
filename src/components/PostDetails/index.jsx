import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from '../../styles/Buttons';
import { Container } from "./styles";


export const PostDetail = ({post}) => {

    const navigate = useNavigate()

  return (
    <Container>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p className='createdBy'>{post.createdBy}</p>
        <div className='tags'>
            {post.tags.map((tag) => (
                <p key={tag} ><span>#</span>{tag}</p>
            ))}
        </div>

        <Button 
            variant="outline" 
            onClick={() => navigate(`/post/${post.id}`)}
        >Ler</Button>
    </Container>
  )
}
