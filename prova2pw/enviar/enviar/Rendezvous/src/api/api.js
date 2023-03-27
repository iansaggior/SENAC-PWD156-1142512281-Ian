const url = "http://localhost:3333";

export const ApiLogin = async (nmUser, password) => {

    let data;

    await fetch(`${url}/user`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            nmUser: nmUser,
            password: password,
        }),  
    })
    .then(async response => {
        data = await response.json();
    })
    .catch(error => {
        data = error;
    });

    return data;
}

export const ApiCad = async (nmUser, password, profile) => {
    
    let data;

    await fetch(`${url}/cadUser`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            nmUser: nmUser,
            password: password,
            profile: profile,
        }),  
    })
    .then(async response => {
        data = await response.json();
    })
    .catch(async error => {
        data = await error.json();
    });

    const response = JSON.stringify(data);

    if (response.includes("Error")){
        return false;
    }
    
    return true;
}

export const ApiSobNos = async () => {

    await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(async response => {
        const data = await response.json();
        data.forEach(element => {

            var h1 = document.getElementById("posts");
            var p = document.createElement("p");

            p.textContent = element.body;
            h1.appendChild(p);
        });
    })
    .catch(error => {console.log(error)});
}