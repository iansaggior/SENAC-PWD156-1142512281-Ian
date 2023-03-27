import Header from "../Header/Header";
import welcome from './welcome.jpg'

function Home(){
    return (
        <div>
            <Header/><br/><br/>
            <div>
                <h1>Bem vindo a Página Principal</h1>
                <img src={welcome} width="300px"></img>
            </div>
        </div>
    );
}

export default Home;