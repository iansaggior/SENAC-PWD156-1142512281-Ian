import { useState } from "react";
import './styles.css';
import { ApiCad } from '../../api/api';
import { Link, useNavigate } from "react-router-dom";

export const CadUser = () => {

    const navigate = useNavigate();

    const [nmUser, setNmUser] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();
        const api = await ApiCad(nmUser, password, profile);

        if (api) {
            window.alert("Usuário castrado com sucesso!!");
            navigate('/login');
        }
        else {
            window.alert("Usuário informado já é existente!!");
            window.location.reload();
        }
    }

    return (
        <div id="cadastro">
            <h1 className="title">Página de Cadastro</h1>
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
                <div className="field">
                    <label htmlFor="profile">Perfil: </label>
                    <select 
                    name="profile" 
                    value={profile}
                    onChange={(e) => {setProfile(e.target.value)}}>
                        <option value="1">1 - Admin</option>
                        <option value="2">2 - Garçom</option>
                        <option value="3">3 - Cozinheiro</option>
                        <option value="4">4 - Gerente</option>
                    </select>
                </div>
                <div className="actions">
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
            <div id="linkHome">
                <label htmlFor="link">Voltar para página: </label>
                <Link to="/"> Login</Link>
            </div>
        </div>
    );
}