import { useState } from 'react';

function Imc() {

  function analisarImc(event){
    event.preventDefault()
    window.alert("Seu IMC foi analisado!")
    informarimc = "IMC informado: " + document.getElementById("imc").value
    document.getElementById("analiseImc").innerHTML = informarimc
    if (imc < 18.50){
      document.getElementById("resultado").innerHTML = "Abaixo do Peso"
    }
    else if (imc >= 18.50 && imc <= 24.49){
      document.getElementById("resultado").innerHTML = "Normal"
    }
    else if (imc >= 25 && imc <= 29.9){
      document.getElementById("resultado").innerHTML = "Sobrepeso"
    }
    else if (imc >= 30 && imc <= 34.9){
      document.getElementById("resultado").innerHTML = "Obesidade Grau I"
    }
    else if (imc >= 35 && imc <= 39.9){
      document.getElementById("resultado").innerHTML = "Obesidade Grau II"
    }
    else if (imc >= 40){
      document.getElementById("resultado").innerHTML = "Obesidade Grau III "
    }
    else {
      document.getElementById("resultado").innerHTML = "Resultado não "
    }
  }

  var informarimc = "";
  const [imc, setImc] = useState()

  return (
    <div className="container">
      <h1 className='IMC'>Análise IMC</h1>
      <form onSubmit={analisarImc}>
        <div>
          <label htmlFor="imc">Informe seu IMC: </label>
          <input 
          type="text" 
          id="imc" 
          name="imc" 
          placeholder="Valor do seu IMC. Ex: 25" 
          onChange={(event) => setImc(event.target.value)}/>
        </div>
        <div><br/>
          <input type="submit" value="Analisar" onClick={analisarImc}/>
        </div>
      </form>
        <h2 id="analiseImc"></h2>
        <h2 id="resultado"></h2>
    </div>
  );
}

export default Imc;