import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/auth";
import { CadUser } from "./pages/CadUser";
import { Home} from './pages/Home';
import { Login } from "./pages/Login";
import { RendezvousHeader } from "./pages/RendezvousHeader";
import { SobNos } from "./pages/SobNos";
import { Cozinha } from './pages/Cozinha'
import { Comanda } from './pages/Comanda'
import { CadPrato } from './pages/CadPrato'

export const RouterApp = () => {

    const Private = ({Item}) => {
        const {authenticated, loading} = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>;
        }

        return authenticated > 0 ? <Item/> : <Navigate to="/login"/>;
    }

    return (
        <BrowserRouter>
            <AuthProvider>
                <RendezvousHeader/>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Private Item={Home}/>}/>
                    <Route path="/sobrenos" element={<SobNos/>}/>
                    <Route path="/cadastro" element={<CadUser/>}/>
                    <Route path="*" element={<Private Item={Home}/>}/>
                    <Route path="/comanda" element={<Private Item={Comanda}/>}/>
                    <Route path="/cozinha" element={<Private Item={Cozinha}/>}/>
                    <Route path="/cardapio" element={<Private Item={CadPrato}/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}