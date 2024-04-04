import React, { useState } from 'react';

const Traders = () => {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [pokemon, setpokemon] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', nome);
        console.log('pokemon:', pokemon);
    };

    return (
        <div>
            <h2>Treinador 1</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <br />

                <label>
                    pokemon:
                    <input type="text" value={pokemon} onChange={(e) => setpokemon(e.target.value)} />
                </label>
                <br />
            </form>
            <h2>Treinador 2</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <br />

                <label>
                    pokemon:
                    <input type="text" value={pokemon} onChange={(e) => setpokemon(e.target.value)} />
                </label>
                <br />
            </form>
            <button type="submit">Trocar</button>

        </div>

    );
};

export default Traders;
