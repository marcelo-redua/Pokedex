var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup',()=>{
    pegaPokemons(quantidade.value);
})

pegaPokemons(3);

function pegaPokemons(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + quantidade)
        .then(response => response.json())
        .then(allpokemon => {

            var pokemons = [];

            allpokemon.results.map((vaL) => {


                fetch(vaL.url)
                    .then(response => response.json())
                    .then(pokemonSingle => {
                        pokemons.push({ nome: vaL.name, imagem: pokemonSingle.sprites.front_default });

                        if (pokemons.length == quantidade) {
                            //finalizamos nossas requesições.


                            var pokemonBoxes = document.querySelector('.pokemon-boxes');
                            pokemonBoxes.innerHTML = "";

                            //console.log(pokemons)
                            pokemons.map(function (vaL) {
                                pokemonBoxes.innerHTML += `
                        <div class="pokemon-box">
                            <img src="`+ vaL.imagem + `">
                            <p>`+ vaL.nome + `</p>
                        </div>`;
                            })
                        }

                    })
            })

        })
}