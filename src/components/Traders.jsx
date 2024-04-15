import React, { useState } from 'react';
import axios from 'axios';

const Traders = () => {
    const [nome1, setNome1] = useState('');
    const [pokemon1, setPokemon1] = useState('');
    const [nome2, setNome2] = useState('');
    const [pokemon2, setPokemon2] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:4000/trade', {
                nameTrainer1: nome1,
                namePokemon1: pokemon1,
                nameTrainer2: nome2,
                namePokemon2: pokemon2
            });
            console.log('Dados dos treinadores enviados com sucesso');

            setNome1('');
            setPokemon1('');
            setNome2('');
            setPokemon2('');
        } catch (error) {
            console.error('Erro ao enviar dados dos treinadores:', error);
        }
    };

    return (
        <div>
            <h2>Treinador 1</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome1} onChange={(e) => setNome1(e.target.value)} />
                </label>
                <br />
                <label>
                    Pokémon:
                    <input type="text" value={pokemon1} onChange={(e) => setPokemon1(e.target.value)} />
                </label>
                <br />
                <h2>Treinador 2</h2>
                <label>
                    Nome:
                    <input type="text" value={nome2} onChange={(e) => setNome2(e.target.value)} />
                </label>
                <br />
                <label>
                    Pokémon:
                    <input type="text" value={pokemon2} onChange={(e) => setPokemon2(e.target.value)} />
                </label>
                <br />
                <button type="submit">Trocar</button>
            </form>
        </div>
    );
};

export default Traders;
