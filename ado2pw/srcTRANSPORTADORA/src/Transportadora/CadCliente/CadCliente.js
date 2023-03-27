import Header from "../Header/Header";
import { useState } from 'react'


function CadCliente(){

    function cadastrar(e){
        e.preventDefault()
        window.alert("Usuário cadastrado")
        document.getElementById("res1").innerHTML = "Razão Social: " + rSocial
        document.getElementById("res2").innerHTML = "Endereço: " + endereco
        document.getElementById("res3").innerHTML = "CNPJ: " + CNPJ
    }

const[rSocial, setRSocial] = useState()
const[endereco, setEndereco] = useState()
const[CNPJ, setCNPJ] = useState()

    return (
        <div>
            <Header/><br/><br/>
            <h1>Cadastro de Cliente</h1>
            <form onSubmit={cadastrar}>
            <label htmlFor="rSocial">Razão Social: </label>
            <input type="text" id="rSocial" name="rSocial" placeholder="Ex: Shaolin Brabo" required onChange={(e) => setRSocial(e.target.value)}/><br/><br/>
            <label htmlFor="endereco">Endereço: </label>
            <input type="text" id="endereco" name="endereco" required placeholder="Digite apenas o CEP" maxLength="8" onChange={(e) => setEndereco(e.target.value)}/><br/><br/>
            <label htmlFor="CNPJ">CNPJ: </label>
            <input type="text" id="CNPJ" name="CNPJ" required placeholder="Digite seu CNPJ" maxLength="14" onChange={(e) => setCNPJ(e.target.value)}></input><br/><br/>
            <input type="submit" value="Cadastrar"/>
            </form>
            <h2 id="res1"></h2>
            <h2 id="res2"></h2>
            <h2 id="res3"></h2>
        </div>
    );
}

export default CadCliente;