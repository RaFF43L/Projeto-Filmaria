//https://sujeitoprogramador.com/r-api/?api=filmes/
import './style.css';
import Routes from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
function App() {

  return (
    <div className="App">
      <Routes/>
      <ToastContainer autoClose={1200} />
    </div>
  );
}

export default App;
