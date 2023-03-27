import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Transportadora/Login/Login'
import Home from './Transportadora/Home/Home'
import CadCliente from './Transportadora/CadCliente/CadCliente'
import CalcFrete from './Transportadora/CalcFrete/CalcFrete'
import SobreNos from './Transportadora/SobreNos/SobreNos'

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cadastro" element={<CadCliente/>}/>
        <Route path="/calcularFrete" element={<CalcFrete/>}/>
        <Route path="/sobreNos" element={<SobreNos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;