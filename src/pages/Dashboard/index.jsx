import { useNavigate } from 'react-router-dom'

import { useAuthValue } from '../../contexts/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

import { Button } from '../../styles/Buttons'
import * as styled from './styles'

export const Dashboard = () => {

  const navigate = useNavigate()

  const user = useAuthValue()
  const uid = user.uid

  const {documents: posts, loading} = useFetchDocuments("posts", null, uid);

  const {deleteDocument} = useDeleteDocument("posts")

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <styled.Container>
      <h1>Dashboard</h1>
      <p>Gerencie os seus posts</p>

      { posts && posts.length === 0 ? (
        <styled.NoPosts>
          <p>Não foram encontrados posts</p>
          <Button variant="green" onClick={() => navigate("/posts/create")} >Criar primeiro post</Button>
        </styled.NoPosts>
      ) : (
        <>
          <div>
            <h2>Título</h2>
            <h2>Ações</h2>
          </div>

          <table>
            <tbody>

            {posts && posts.map((post) => (
              <tr>
                <td key={post.id}>{post.title}</td>
                <td>
                  <Button variant="outline" onClick={() => navigate(`/post/${post.id}`)}>Ver</Button>
                  <Button variant="outline" onClick={() => navigate(`/post/edit/${post.id}`)}>Editar</Button>
                  <Button variant="danger-outline" onClick={() => deleteDocument(post.id)}>Excluir</Button>
                </td>
              </tr>
            ))}

            </tbody>

          </table>
        </>
      ) }

      
    </styled.Container>
  )
}
