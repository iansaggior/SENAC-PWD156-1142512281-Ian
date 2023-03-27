import Header from "../Header/Header";

const local = [
    {
        cidade: "São Jose do Rio Preto",
        distanciaToSP: 443 
    },
    {
        cidade: "Campo Grande",
        distanciaToSP: 985
    },
    {
        cidade: "São Manuel",
        distanciaToSP: 256
    }
]

function CalcFrete(){

    function calcularFrete(e){
        e.preventDefault()
        local.forEach((local) => {
            if (document.getElementById("destino").value === local.cidade){
                var total = ((2.50 * document.getElementById("peso").value) * local.distanciaToSP);
                var totalFixed = total.toFixed(2);
                document.getElementById("resultado1").innerHTML = "Destino: " + local.cidade
                document.getElementById("resultado2").innerHTML = "Peso: " + document.getElementById("peso").value + " Toneladas"
                document.getElementById("resultado3").innerHTML = "Valor do Frete: R$ " + totalFixed
            }
        })
    }

    return (
        <div>
            <Header/><br/><br/>
            <h1>Cálculo de Frete</h1>
            <form onSubmit={calcularFrete}>
                <label htmlFor="peso">Peso: </label>
                <input type="number" required id="peso" name="peso" placeholder="Peso em Tonelada  Ex: 10"/><a> T</a><br/><br/>
                <label htmlFor="destino">Destino: </label>
                <select id="destino" name="destino">
                    <option value="São Jose do Rio Preto">São Jose do Rio Preto</option>
                    <option value="Campo Grande">Campo Grande</option>
                    <option value="São Manuel">São Manuel</option>
                </select><br/><br/>
                <input type="submit" value="Calcular"/>
            </form>
            <h2 id="resultado1"></h2>
            <h2 id="resultado2"></h2>
            <h2 id="resultado3"></h2>
        </div>
    );
}

export default CalcFrete;