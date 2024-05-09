import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginUser, loginFailure } from '../redux/actions/auth';

const Login = () => {
    const dispatch = useDispatch();
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            await dispatch(loginUser({ nome, senha }));
        } catch (error) {
            setError(error.response.data.message || "Erro ao fazer login");
            dispatch(loginFailure());
            console.error("Erro ao fazer login:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                {error && <div className="error">{error}</div>}
                <button type="submit" disabled={loading}>Login</button>
                {loading && <div>Carregando...</div>}
            </form>
        </div>
    );
};

export default Login;
