import { Link } from 'react-router-dom';
function Calculo () {
    return (
        <body>
            <div id='centro' style={{backgroundColor: "black"}}>
                <h1 style={{color: "red"}}>Pagina relacionada ao Calculo do Financiamento</h1><br/>
            </div>
                <h0>Quer voltar para nosaa pagina home? </h0>
                <Link to='/'>Home</Link><br/>        
        </body>
    )
}
export default Calculo;