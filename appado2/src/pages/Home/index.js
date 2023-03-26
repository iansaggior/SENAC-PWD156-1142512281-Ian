import { Link } from 'react-router-dom';
import home from './home.png';
import './App.css';
function Home () {
    return ( 
            <body id='centro' >
                <div style={{backgroundColor:"black"}}>
                    <h1 style={{color:"red"}}><bold>Pagina Home</bold></h1>
                    <Link to='/' style={{color:"white"}}>Home</Link><br/>
                    <Link to='/cadastro' style={{color:"white"}}>Cadastro do Cliente</Link><br/>
                    <Link to='/contaCorrente' style={{color:"white"}}>Movimentacao da Conta Corrente</Link><br/>
                    <Link to='/calculoFinanciamento' style={{color:"white"}}>Calculo do Financiamento</Link><br/>
                    <Link to='/sobreNos' style={{color:"white"}}>Sobre Nós</Link><br/>
                </div>
                <img id = 'home' src={home} width='520' size='520'></img>
            </body>
    )
}
export default Home;