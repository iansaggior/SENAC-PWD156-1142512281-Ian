import { Link } from 'react-router-dom';
import error from './error.webp';
import './App.css';
function Erro () {
    return (
        <body id='centro' >
            <div id='tamnho' style={{backgroundColor:"black"}}>
                <h1 style={{color: "red"}}>Opss... endereço não encontrado!! </h1>
            </div>
            <img id='espaco' src={error} width='400' size='400'></img>
                <h3><bold> Quer voltar para nosaa pagina home? </bold></h3>
                <Link to='/'>Home</Link>        
        </body>
    )
}
export default Erro;