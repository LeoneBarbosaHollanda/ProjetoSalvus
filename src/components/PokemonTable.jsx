//PokemonTable


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TabelaPokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get('http://localhost:4000/pokemons');
                setPokemons(response.data);
            } catch (error) {
                console.error('Erro ao buscar os Pokémons:', error);
            }
        };

        fetchPokemons();
    }, []);

    const handleDeletePokemon = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/pokemons/${id}`);
            setPokemons(pokemons.filter(pokemon => pokemon.id !== id));
            console.log('Pokemon deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar o Pokémon:', error);
        }
    };

    return (
        <div className='listapokemon'>
            <h2>Lista de Pokémons</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Vida</th>
                        <th>Velocidade</th>
                        <th>Ataque 1</th>
                        <th>Ataque 2</th>
                        <th>Treinador ID</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map(pokemon => (
                        <tr key={pokemon.id}>
                            <td>{pokemon.nome}</td>
                            <td>{pokemon.tipo}</td>
                            <td>{pokemon.vida}</td>
                            <td>{pokemon.velocidade}</td>
                            <td>{pokemon.ataque1}</td>
                            <td>{pokemon.ataque2}</td>
                            <td>{pokemon.treinadorId}</td>
                            <td>
                                <button onClick={() => handleDeletePokemon(pokemon.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaPokemon;
