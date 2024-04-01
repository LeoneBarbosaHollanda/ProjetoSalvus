import React, { useState, useEffect } from 'react';

const TabelaPokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const dadosDoBanco = [
            { id: 1, nome: 'Pikachu', tipo: 'Elétrico', vida: 100, velocidade: 90, ataque1: 'Choque do Trovão', ataque2: 'Investida Trovão', treinadorId: 1 },
            { id: 2, nome: 'Charmander', tipo: 'Fogo', vida: 95, velocidade: 85, ataque1: 'Brasa', ataque2: 'Chama', treinadorId: 2 },
        ];

        setPokemons(dadosDoBanco);
    }, []);

    return (
        <div>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaPokemon;
