import { Link } from 'react-router-dom';
function Conta () {
    return (
        <body>
            <div id='centro' style={{backgroundColor: "black"}}> 
                <h1 style={{color: "red"}}>Pagina de Movimentacao da Conta Corrente</h1><br/>
            </div>
                <h0>Quer voltar para nosaa pagina home? </h0>
                <Link to='/'>Home</Link><br/>
        </body>
    )
}
export default Conta;