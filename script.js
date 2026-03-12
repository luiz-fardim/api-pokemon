const inputPokemon = document.querySelector("#pokemon")
const resultado = document.querySelector("#resultado")
const btn = document.querySelector("#btn")

inputPokemon.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        buscarPokemon()
    }
}
)

btn.addEventListener("click", buscarPokemon)

async function buscarPokemon() {
    const nome = inputPokemon.value

    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        const dados = await resposta.json()

        resultado.innerHTML = `
        <h2>${dados.name.toUpperCase()}</h2>
        <img src = "${dados.sprites.front_default}">
        <p>Peso: ${dados.weight}</p>
        <p>Altura: ${dados.height}</p>
        `
    }
    catch (erro) {
        resultado.innerHTML = "Pokémon não encontrado!"
    }
}
