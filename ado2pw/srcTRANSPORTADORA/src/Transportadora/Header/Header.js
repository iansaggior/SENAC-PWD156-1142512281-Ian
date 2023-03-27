import { Link } from 'react-router-dom'


function Header(){
    return (
        <div>
            <h1 >TRANSPORTE XPTO</h1>
            <div>
                <Link to="/home">||  HOME  ||</Link>
                <Link to="/calcularFrete">||  FRETE  ||</Link>
                <Link to="/cadastro">||  CADASTRO  ||</Link>
                <Link to="/sobreNos">||  SOBRENOS  ||</Link>
            </div>
        </div>
    );
}
export default Header;