import React, { useState } from 'react';

const PokemonCadastro = () => {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [vida, setVida] = useState('');
    const [velocidade, setVelocidade] = useState('');
    const [ataque1, setAtaque1] = useState('');
    const [ataque2, setAtaque2] = useState('');
    const [treinadorId, setTreinadorId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', nome);
        console.log('Tipo:', tipo);
        console.log('Vida:', vida);
        console.log('Velocidade:', velocidade);
        console.log('Ataque 1:', ataque1);
        console.log('Ataque 2:', ataque2);
        console.log('Treinador ID:', treinadorId);
    };

    return (
        <div className='tablePokemon'>
            <h2>Cadastro de Pokémon</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <br />
                <label>
                    Tipo:
                    <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
                </label>
                <br />
                <label>
                    Vida:
                    <input type="text" value={vida} onChange={(e) => setVida(e.target.value)} />
                </label>
                <br />
                <label>
                    Velocidade:
                    <input type="text" value={velocidade} onChange={(e) => setVelocidade(e.target.value)} />
                </label>
                <br />
                <label>
                    Ataque 1:
                    <input type="text" value={ataque1} onChange={(e) => setAtaque1(e.target.value)} />
                </label>
                <br />
                <label>
                    Ataque 2:
                    <input type="text" value={ataque2} onChange={(e) => setAtaque2(e.target.value)} />
                </label>
                <br />
                <label>
                    Treinador ID:
                    <input type="text" value={treinadorId} onChange={(e) => setTreinadorId(e.target.value)} />
                </label>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default PokemonCadastro;
