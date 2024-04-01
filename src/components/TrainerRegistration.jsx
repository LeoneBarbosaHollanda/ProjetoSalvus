import React, { useState } from 'react';

const UserCadastro = () => {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [dinheiro, setDinheiro] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', nome);
        console.log('Sexo:', sexo);
        console.log('Dinheiro:', dinheiro);
    };

    return (
        <div>
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <br />
                <label>
                    Sexo:
                    <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
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
