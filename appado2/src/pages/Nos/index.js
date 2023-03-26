import { Link } from 'react-router-dom';
function Nos () {
    return (
        <body>
            <div id='centro' style={{backgroundColor:"black"}}> 
                <h1 style={{color: "red"}}>Página sobre a empresa</h1>
                <h0 style={{color: "white"}}>Aqui falremos mais sobre a nossa empresa </h0>
            </div>
                <h0>Quer voltar para nosaa pagina home? </h0>
                <Link to='/'>Home</Link><br/>        
        </body>

    )
}
export default Nos;