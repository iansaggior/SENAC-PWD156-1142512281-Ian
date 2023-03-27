import pessoas from './pessoas.jpeg'
import Header from '../Header/Header';

function SobreNos(){
    return (
        <div>
            <Header/><br/><br/>
            <h1>Sobre Nós</h1>
            <img src={pessoas} width="700px"></img>
            <p>A Transportadora XPTO é uma empresa fundada em São Paulo no ano de 2002, com a missão de atender todo o Brasil com qualidade</p>
            
        </div>
    );
}

export default SobreNos;