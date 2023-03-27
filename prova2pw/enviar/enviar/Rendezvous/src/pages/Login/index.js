import './styles.css';
import { useState, useContext } from 'react';
import {AuthContext} from '../../contexts/auth'
import { Link, Navigate } from 'react-router-dom';

export const Login = () => {

    const {login, authenticated, user} = useContext(AuthContext);

    const [nmUser, setNmUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(nmUser, password);
    }
    if(authenticated) {
        return <Navigate to="/"/>
    }

    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="user">Usuário: </label>
                    <input 
                    name="user" 
                    id="user" 
                    type="text" 
                    required 
                    value={nmUser} 
                    onChange={(e) => {setNmUser(e.target.value)}}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha: </label>
                    <input 
                    name="password" 
                    id="password" 
                    type="password" 
                    required 
                    value={password} 
                    onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div className="actions">
                    <input type="submit" value="Sign in"/>
                </div>
            </form>
            <div id="linkCadastro">
                <label htmlFor="link">Não possui cadastro ? Clique aqui: </label>
                <Link to="/cadastro"> Cadastro</Link>
            </div>
        </div>
    )
}