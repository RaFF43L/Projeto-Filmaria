import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './style.css';
import {toast} from 'react-toastify';
function Favoritos () {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);
       
        async function loadFilme(){
           
            setLoading(false);
        }

    loadFilme();

    }, []);

    function handleDelete(id){
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.success('Filme excluido com sucesso');
    }
        if(loading){
            return(
                <div className='filme-info'>
                    <h1>Carregando...</h1>
                </div>
            )
        }
    
    return(
    
    <div id="meus-filmes">
      <h1>Meus Filmes</h1>

      <h2>{filmes.length ===0 && <span>Você não possui nenhum filme salvo em sua lista</span>}</h2>
     
      <ul>
          {filmes.map((item) =>{
              return(
                  <li key={item.id}> 
                    <span>{item.nome}</span>
                    <div className="botoes">
                        <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                        <button onClick={()=> handleDelete(item.id)}>Excluir</button>
                    </div>
                  </li>
              )
          })}
      </ul>
    </div>
    
    )

}

export default Favoritos;