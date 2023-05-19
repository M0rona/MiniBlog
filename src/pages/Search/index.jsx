import React from 'react'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import { PostDetail } from '../../components/PostDetails'

import { Button } from '../../styles/Buttons'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

export const Search = () => {

    const query = useQuery();
    const search = query.get("q"); 
    const navigate = useNavigate()

    const {documents: posts} = useFetchDocuments("posts", search);

  return (
    <Container>
        <h1>Resultados encontrados para: {search}</h1>
        <div>
            {posts && posts.map((post)=> (
                <PostDetail key={post.id} post={post}/>
            ))}

            {posts && posts.length === 0 && (
                <>
                    <p className='nPossivel'>Não foram encontrados posts a partir da sua busca...</p>

                    <div className='button'>

                        <Button variant="dark" onClick={() => navigate("/")} >Voltar</Button>

                    </div>
                </>
            )}
        </div>
    </Container>
  )
}
