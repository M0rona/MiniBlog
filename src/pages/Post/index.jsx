import React from 'react'

import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

import { Container } from './styles'

export const Post = () => {

    const { id } = useParams()
    const { document: post, loading } = useFetchDocument("posts", id)

  return (
    <Container>
        {loading && <p>Carregando post...</p>}
        {post && (
            <div className='content'>
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.body}</p>


                <div className='tags'>
                    <h3>Este poste se trata de:</h3>
                    {post.tags.map((tag) => (
                        <p key={tag}><span>#</span>{tag}</p>
                    ))}
                </div>
            </div>
        )}
    </Container>
  )
}
