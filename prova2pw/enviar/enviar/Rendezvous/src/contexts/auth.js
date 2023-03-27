import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ApiLogin } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = async (nmUser, password) => {

        const api = await ApiLogin(nmUser, password);
        
        const session = {
            id: api.idUser,
            user: api.nmUser,
            profile: api.profile
        }
        
        if (password === api.password && nmUser === api.nmUser) {    
            setUser(session);
            localStorage.setItem("user", JSON.stringify(session));
            window.alert("Login efetuado com sucesso!!");
            navigate("/");
        }
        else {
            window.alert("Usuário ou senha incorretos!!");
        }

    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{authenticated: Boolean(user), user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
} 