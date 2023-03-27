import { Link } from 'react-router-dom'

const users = [
    {
        id: "admin1",
        senha: "admin1"
    },
    {
        id: "admin2",
        senha: "admin2"
    },
    {
        id: "admin3",
        senha: "admin3"
    },
]
let controle = 0;



function Login(){

    function login(e){
        e.preventDefault()
        users.forEach((users) => {
            if (document.getElementById("ID").value == users.id && document.getElementById("password").value == users.senha){
                window.alert("Login efetuado com sucesso")
                window.location.href="/home"
            }
            else {
                controle++;
            }
        })
        if (controle === users.length){
            window.alert("Usuário não encontrado")
            document.getElementById("result").innerHTML = "ID e Senha não conferem!!"
        }
    }

    return (
        <div>
            <h1>Entrada no Sistema</h1>
                <form onSubmit={login}>
                    <label htmlFor="ID">ID: </label>
                    <input type="text" 
                    placeholder="Digite o seu ID" 
                    name="ID"
                    id="ID"
                    required /><br/><br/>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" 
                    placeholder="Digite sua senha" 
                    name="password"
                    id="password"
                    required/><br/><br/>
                    <input type="submit" value="Login"/>
                </form><br/>
                <h3 id="result"></h3>
        </div>
    )
}

export default Login;