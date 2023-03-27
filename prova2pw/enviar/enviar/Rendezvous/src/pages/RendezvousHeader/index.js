import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/auth';
import './styles.css';

export const RendezvousHeader = () => {

    const { logout, authenticated, user } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    if (authenticated) {
        return (
            <div id="header">
                <h1 className="h1">Rendezvous</h1>
                <div id="links">   
                    <Link className="navigate" to="/cardapio">Cardápio |</Link>
                    <Link className="navigate" to="/cadastro">Cadastrar Usuário</Link>
                    <Link className="navigate" to="/comanda">Comanda</Link>
                    <Link className="navigate" to="/cozinha">Cozinha</Link>
                    <Link className="navigate" to="/sobrenos">Sobre o Rendezvous</Link>
                    <Link className="navigate" to="/login" onClick={handleLogout}>Sair</Link>
                </div>
                    <h3 className="h3">{`${user.user}, seja bem vindo ao Rendezvous App`}</h3>
            </div>
        )
    }


    return (
        <div id="header">
            <h1 className="h1">Rendezvous</h1>
                <Link id="linkSolo1" to="/sobrenos">Sobre o Rendezvous</Link>
                <Link id="linkSolo2" to="/login">Login</Link>
        </div>
    )
}