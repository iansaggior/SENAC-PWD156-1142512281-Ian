import {BrowserRouter,
        Routes,
        Route } from 'react-router-dom';
import Home from './pages/Home';
import Cad from './pages/Cad';
import Conta from './pages/Conta';
import Calculo from './pages/Calculo';
import Nos from './pages/Nos';
import Erro from './pages/Erro';

function RoutesApp () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<Cad/>}/>
                <Route path='/contaCorrente' element={<Conta/>}/>
                <Route path='/calculoFinanciamento' element={<Calculo/>}/>
                <Route path='/sobreNos' element={<Nos/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;