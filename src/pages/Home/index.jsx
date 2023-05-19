import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { Button } from "../../styles/Buttons"
import { Container } from "./styles";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { PostDetail } from "../../components/PostDetails";

export const Home = () => {
  const [query, setQuery] = useState("")
  const { documents: posts, loading } = useFetchDocuments("posts")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
      
    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <Container>
      <h1>Veja os nossos posts mais recentes</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder="Ou Busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button variant="dark" >Pesquisar</Button>
      </form>

      <section>
        {loading && <p>Carregando...</p>}

        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
        {posts && posts.length === 0 && (
          <div className="noposts">
            <p>Não foram encontrados posts</p>
            
            <Button variant="green" onClick={() => navigate("posts/create")}>Criar primeiro post</Button>
          </div>
        )}
      </section>
    </Container>
  );
};
