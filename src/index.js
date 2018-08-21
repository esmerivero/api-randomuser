const url = 'https://randomuser.me/api';
let avatar = document.querySelector("#avatar");
let fullName = document.querySelector("#fullname");
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let btn = document.querySelector("#btn");

btn.addEventListener('click', () =>{
    clicking();
})

let clicking = () =>{
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((dataJson) => {
        return dataJson.results;
    })
    .then((userResult) => {
        let dataUser = userResult[0];        
        userName.innerHTML = dataUser.name.first;
        fullName.innerHTML = dataUser.name.first + ' ' + dataUser.name.last;
        email.innerHTML = dataUser.email;
        city.innerHTML = dataUser.location.city;
    })
}