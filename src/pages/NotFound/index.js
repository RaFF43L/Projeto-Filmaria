import {Link } from 'react-router-dom';
import './style.css';
function NotFound(){

    return(
        
         <div className='notfound'>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to="/">Voltar ao HOME</Link>
        </div>
        
    )
}

export default NotFound;