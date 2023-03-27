const url = "http://localhost:3333/users/all";

function getUsers(){

    fetch(url)
    .then(response => {
        response.json().then(data => {
            
            let button = document.getElementById("button");
            button.remove();

            data.forEach(element => {

                let h2 = document.getElementById('users');
                let firstH2 = document.createElement("p");
                let secondH2 = document.createElement("p");

                firstH2.textContent = "Nome: " + element.nmUser;
                h2.appendChild(firstH2);
                secondH2.textContent = "Profile: " + element.profile;
                h2.appendChild(secondH2);
            })
        })
    })
    
}
