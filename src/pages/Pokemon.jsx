import PokemonCadastro from "../components/PokemonRegistration"
import TabelaPokemon from "../components/TabelaPokemon"
import "../styles/pages/TabelaPokemon.sass";

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