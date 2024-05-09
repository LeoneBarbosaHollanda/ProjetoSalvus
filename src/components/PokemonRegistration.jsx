//pokemonRegistration

import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'semantic-ui-react';
import axios from 'axios';

const PokemonCadastro = () => {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [vida, setVida] = useState('');
    const [velocidade, setVelocidade] = useState('');
    const [ataque1, setAtaque1] = useState('');
    const [ataque2, setAtaque2] = useState('');
    const [treinadorId, setTreinadorId] = useState('');
    const [trainerOptions, setTrainerOptions] = useState([]);
    const trainer1DropdownRef = useRef(null);
    const [error, setError] = useState('');


    useEffect(() => {
        axios.get('http://localhost:4000/trainers')
            .then(response => {
                const options = response.data.map(trainer => ({
                    key: trainer.id,
                    text: trainer.nome,
                    value: trainer.id 
                }));
                setTrainerOptions(options);
            })
            .catch(error => {
                console.error('Erro ao buscar dados dos treinadores:', error);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/pokemons', {
                nome,
                tipo,
                vida,
                velocidade,
                ataque1,
                ataque2,
                treinadorId
            });
            console.log('Resposta da API:', response.data);
            // Limpa os campos após o cadastro
            setNome('');
            setTipo('');
            setVida('');
            setVelocidade('');
            setAtaque1('');
            setAtaque2('');
            setTreinadorId('');
            setError(''); // Limpa o erro caso tenha sucesso
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            if (error.response && error.response.data) {
                setError(error.response.data.error); // Define o erro retornado pela API
            } else {
                setError('Erro ao cadastrar o Pokémon.'); // Caso contrário, define um erro genérico
            }
        }
    };

    const handleTrainer1Change = (e, data) => {
        setTreinadorId(data.value); // Armazena o ID do treinador selecionado
        if (trainer1DropdownRef.current) {
            trainer1DropdownRef.current.handleClose();
        }
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
                {error && <p style={{ color: 'red' }}>{error}</p>}
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
                Nome do treinador:
                <Dropdown
                    placeholder='Select Trainer'
                    fluid
                    search
                    selection
                    options={trainerOptions}
                    value={treinadorId} // Usa o ID do treinador como valor
                    onChange={handleTrainer1Change}
                    ref={trainer1DropdownRef}
                />
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default PokemonCadastro;
