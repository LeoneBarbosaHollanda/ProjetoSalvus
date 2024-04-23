import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';

const Traders = () => {
    const [nome1, setNome1] = useState('');
    const [pokemon1, setPokemon1] = useState('');
    const [nome2, setNome2] = useState('');
    const [pokemon2, setPokemon2] = useState('');
    const [pokemonOptions, setPokemonOptions] = useState([]);
    const [trainerOptions, setTrainerOptions] = useState([]);
    const [selectedTrainer1Pokemons, setSelectedTrainer1Pokemons] = useState([]);
    const trainer1DropdownRef = useRef(null); // Referência para o Dropdown do treinador 1

    useEffect(() => {
        axios.get('http://localhost:4000/trainers')
            .then(response => {
                const options = response.data.map(trainer => ({
                    key: trainer.id,
                    text: trainer.nome,
                    value: trainer.nome
                }));
                setTrainerOptions(options);
            })
            .catch(error => {
                console.error('Erro ao buscar dados dos treinadores:', error);
            });
    }, []);

    const handleTrainer1Change = (e, data) => {
        setNome1(data.value);
        // Buscar os Pokémon do treinador selecionado
        axios.get(`http://localhost:4000/pokemons/trainer/${data.value}`)
            .then(response => {
                const options = response.data.map(pokemonName => ({
                    key: pokemonName,
                    text: pokemonName,
                    value: pokemonName
                }));
                setSelectedTrainer1Pokemons(options);
            })
            .catch(error => {
                console.error('Erro ao buscar dados dos pokémons do treinador:', error);
            });

        if (trainer1DropdownRef.current) {
            trainer1DropdownRef.current.handleClose();
        }
    };

    const handleTrainer2Change = (e, data) => {
        setNome2(data.value);
        // Buscar os Pokémon do treinador selecionado
        axios.get(`http://localhost:4000/pokemons/trainer/${data.value}`)
            .then(response => {
                const options = response.data.map(pokemonName => ({
                    key: pokemonName,
                    text: pokemonName,
                    value: pokemonName
                }));
                setPokemonOptions(options);
            })
            .catch(error => {
                console.error('Erro ao buscar dados dos pokémons do treinador:', error);
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const pokemonName1 = pokemon1;
            const pokemonName2 = pokemon2;
            console.log(pokemonName1)
            console.log(pokemonName2)
            console.log(nome1)
            console.log(nome2)


            await axios.post('http://localhost:4000/trade', {
                nameTrainer1: nome1,
                namePokemon1: pokemonName1,
                nameTrainer2: nome2,
                namePokemon2: pokemonName2
            });
            console.log('Dados dos treinadores enviados com sucesso');

            setNome1('');
            setPokemon1('');
            setNome2('');
            setPokemon2('');
        } catch (error) {
            console.error('Erro ao enviar dados dos treinadores:', error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Treinador 1</h2>
                Nome:
                <Dropdown
                    placeholder='Select Trainer'
                    fluid
                    search
                    selection
                    options={trainerOptions}
                    value={nome1}
                    onChange={handleTrainer1Change}
                    ref={trainer1DropdownRef} // Adicionando a referência ao Dropdown do treinador 1
                />
                <br />
                Pokémon:
                <Dropdown
                    placeholder='Select Pokémon'
                    fluid
                    search
                    selection
                    options={selectedTrainer1Pokemons}
                    value={pokemon1}
                    onChange={(e, data) => setPokemon1(data.value)}
                />
                <br />
                <h2>Treinador 2</h2>
                Nome:
                <Dropdown
                    placeholder='Select Trainer'
                    fluid
                    search
                    selection
                    options={trainerOptions}
                    value={nome2}
                    onChange={handleTrainer2Change}
                />
                <br />
                Pokémon:
                <Dropdown
                    placeholder='Select Pokémon'
                    fluid
                    search
                    selection
                    options={pokemonOptions}
                    value={pokemon2}
                    onChange={(e, data) => setPokemon2(data.value)}
                />
                <br />
                <button type="submit">Trocar</button>
            </form>
        </div>
    );
};

export default Traders;
