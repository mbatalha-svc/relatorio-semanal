import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function LoginPage() {
  // Estados para controlar os campos de entrada
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const [registerSuccess, setRegisterSuccess] = useState(false); // Novo estado para rastrear o sucesso do cadastro
  // Defina o estado para armazenar a mensagem de erro (caso ocorra)
  const [errorMessage, setErrorMessage] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aqui você pode usar Axios ou Fetch para enviar as credenciais ao servidor
    try {
      const response = await fetch('http://localhost:3001/add-user', {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cpf, senha, nome, email, telefone }),
      });

      if (response.ok) {
        // O login foi bem-sucedido, você pode redirecionar o usuário ou fazer outras ações
        setRegisterSuccess(true)
        console.log('Cadastrado com sucesso');
      } else {
        // Ocorreu um erro durante o login, você pode exibir uma mensagem de erro
        const data = await response.json(); // Converter a resposta em JSON

        if (data.error) {
          setErrorMessage(data.error); // Definir a mensagem de erro no estado
        }
      }
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  };

  if (registerSuccess) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="register-page">
      <h2>Faça Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
}

export default LoginPage;
