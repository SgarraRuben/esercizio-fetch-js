let button = document.getElementById("cliccami");
let nome = document.getElementById("nome");
let altezza = document.getElementById("altezza");
let sesso = document.getElementById("sesso");
let anno = document.getElementById("anno");
let skin = document.getElementById("skin");

function getData() {
    // let random=Math.floor((Math.random()*61)+1);
    let a = document.getElementById("InputUser").value;

    let c = parseInt(a);
    let api = 'https://swapi.dev/api/people/' + c;
    console.log(random);

    fetch(api).then(response => {
        return response.json();
    }).then(people => {
        nome.innerText = people.name;
        anno.innerText = people.birth_year;
        altezza.innerText = people.height;
        sesso.innerText = people.gender;
        skin.innerText = people.skin_color;

    })


}



cliccami.addEventListener("click", getData)