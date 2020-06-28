const url = 'https://pokeapi.co/api/v2/pokemon/68/' //de 1 a 807//

fetch(url)
.then(response => response.json())
.then (data => {
    let element = document.getElementById('element')
    element.innerHTML=  
    `<p>${data.name} </p>
    <p>${data.id} </p>
    <img src ='${data.sprites.front_default}'/>
    `;

})

.catch(err=> console.log(err));

