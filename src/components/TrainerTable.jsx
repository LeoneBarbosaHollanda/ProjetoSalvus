import React, { useState, useEffect } from 'react';

const TabelaUser = () => {
    // Estado para armazenar os usuários
    const [user, setUser] = useState([]);

    useEffect(() => {
        // Aqui você deve buscar os dados dos usuários do seu banco de dados
        // Por simplicidade, vamos simular os dados
        const dadosDoBanco = [
            { id: 1, nome: 'João', sexo: 'Masculino', dinheiro: 100 },
            { id: 2, nome: 'Maria', sexo: 'Feminino', dinheiro: 150 },
            // Adicione mais dados conforme necessário
        ];

        // Atualizando o estado com os dados obtidos do banco de dados
        setUser(dadosDoBanco);
    }, []);

    return (
        <div className='tableuser'>
            <h2>Lista de Usuários</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>Dinheiro</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nome}</td>
                            <td>{user.sexo}</td>
                            <td>{user.dinheiro}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaUser;
