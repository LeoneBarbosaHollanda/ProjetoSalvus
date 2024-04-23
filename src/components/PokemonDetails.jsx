//PokemonDetails
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TabelaPokemon from './TabelaPokemon';
import PokemonCadastro from './PokemonCadastro';

const PokemonApp = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        try {
            const response = await axios.get('http://localhost:4000/pokemons');
            setPokemons(response.data);
        } catch (error) {
            console.error('Erro ao buscar os Pokémons:', error);
        }
    };

    const addPokemon = async (newPokemon) => {
        try {
            const response = await axios.post('http://localhost:4000/pokemons', newPokemon);
            setPokemons([...pokemons, response.data]);
            console.log('Pokemon cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar o Pokémon:', error);
        }
    };

    const deletePokemon = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/pokemons/${id}`);
            setPokemons(pokemons.filter(pokemon => pokemon.id !== id));
            console.log('Pokemon deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar o Pokémon:', error);
        }
    };

    return (
        <div>
            <PokemonCadastro addPokemon={addPokemon} />
            <TabelaPokemon pokemons={pokemons} deletePokemon={deletePokemon} />
        </div>
    );
};

export default PokemonApp;
