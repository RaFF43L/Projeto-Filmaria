//https://sujeitoprogramador.com/r-api/?api=filmes/
import './style.css';
import { useEffect, useState } from 'react';
import reactRouterDom from 'react-router-dom';
import api from '../../services/api';
import {Link} from 'react-router-dom';
function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{
    async function loadFilmes(){
      //sujeitoprogramador.com
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data);
    }
    loadFilmes();
  },[]);
    return (
      <div className='container'>
        <div className='lista-filmes'>
          {filmes.map((filme)=>{
            return(
              <article key={filme.id}>
                  <strong>{filme.nome}</strong>
                  <img src={filme.foto} alt={filme.nome} />
                  <Link to="/">Acessar</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
  }
  
  export default Home;
  