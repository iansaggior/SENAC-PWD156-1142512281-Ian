const express = require("express");
const server = express();
server.use(express.json())

const users = [
    {
        userID: "user1",
        password: "123123"
    },
    {
        userID: "user2",
        password: "123123"
    },
    {
        userID: "user3",
        password: "123123"
    },
    {
        userID: "user4",
        password: "123123"
    }
];



server.get("/login", (req, res) => {

    const userID = req.query.userID;
    const {password} = req.body;

    let controle1 = 0;
    let controle2 = 0;
    
    if (!userID){
        return res.json({message:"Usuário não informado!"})
    }
    else {
        controle1++;
    }
    if (!password){
        return res.json({message:"Senha não informada!"})
    }
    else {
        controle2++;
    }

    users.forEach((users) => {
        if (users.userID === userID){
            controle1++;
        }
        if (users.password === password){
            controle2++;
        }
    })

    if (controle1 < 2){
        return res.json({message:"Usuário não encontrado no banco de dados!"})
    }
    else if (controle2 < 2){
        return res.json({message:"Senha não bate com a senha do BD!"})
    }
    else {
        return res.json({message:"Login efetuado com sucesso!"})
    }
});

server.listen(3000);
