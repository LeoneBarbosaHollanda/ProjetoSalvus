import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tabelatrainers = () => {
    const [trainers, setTrainers] = useState([]);

    const fetchTrainers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/trainers');
            setTrainers(response.data);
        } catch (error) {
            console.error('Erro ao buscar os treinadores:', error);
        }
    };

    useEffect(() => {
        fetchTrainers();
    }, []);

    const handleAddTrainer = async (newTrainer) => {
        try {
            await axios.post('http://localhost:4000/trainers', newTrainer);
            fetchTrainers();
            console.log('Treinador cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar o treinador:', error);
        }
    };

    // Função para lidar com a exclusão de um treinador
    const handleDeleteTrainer = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/trainers/${id}`);
            fetchTrainers();
            console.log('Treinador deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar o treinador:', error);
        }
    };

    return (
        <div className='tabletrainers'>
            <h2>Lista de treinadores</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>Dinheiro</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map(trainer => (
                        <tr key={trainer.id}>
                            <td>{trainer.id}</td>
                            <td>{trainer.nome}</td>
                            <td>{trainer.sexo}</td>
                            <td>{trainer.dinheiro}</td>
                            <td>
                                <button onClick={() => handleDeleteTrainer(trainer.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tabelatrainers;
