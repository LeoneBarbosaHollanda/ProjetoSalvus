import PokemonCadastro from "../components/PokemonRegistration"
import TabelaPokemon from "../components/PokemonTable"

const Pokemon = () => {

    return (
        <div class="conteiner">

            <div><PokemonCadastro>
            </PokemonCadastro></div>

            <div><TabelaPokemon>
            </TabelaPokemon></div>

        </div>
    )
}

export default Pokemon