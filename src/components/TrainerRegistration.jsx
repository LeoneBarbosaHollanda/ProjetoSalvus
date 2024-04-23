import React, { useState } from 'react';
import axios from 'axios';

const UserCadastro = () => {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [dinheiro, setDinheiro] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/trainers', {
                nome,
                sexo,
                dinheiro
            });
            console.log('Resposta da API:', response.data);
            setNome('');
            setSexo('');
            setDinheiro('');
            setError('');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setError(error.response.data.error);
        }
    };

    return (
        <div>
            <h2>Cadastro de Treinador</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <label>
                    Sexo:
                    <input type="text" value={sexo} onChange={(e) => setSexo(e.target.value)} />
                </label>
                <br />
                <label>
                    Dinheiro:
                    <input type="text" value={dinheiro} onChange={(e) => setDinheiro(e.target.value)} />
                </label>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default UserCadastro;
