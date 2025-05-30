'use client'

import React, { useState } from 'react';
import './home.css';  // Arquivo de estilos

const Home = () => {

  // Declarar uma nova variável dados com useState e atribuir o objeto
  const [data, setData] = useState({
    username: '',
    emailUser: ''
  });

  // Receber os dados dos campos do formulário
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => setData({...data, [e.target.name]: e.target.value});

  // Executar a função quando o usuário clicar no botão do formulário
  const addUser = (e:React.FormEvent<HTMLFormElement>) => {

    // Bloquear o recarregamento da página
    e.preventDefault();

    console.log("Processar o form");

    // Manipular os dados recebidos, por exemplo, enviar os dados para API
    // Concatenar e imprimir
    // console.log("Nome: " + data.username);
    // console.log("E-mail: " + data.emailUser);

    // Concatenar e imprimir utilizando Template strings
    console.log(`Nome: ${data.username}`);
    console.log(`E-mail:${data.emailUser}`);
  }

  return (
    <main className="main-container">
      <form onSubmit={addUser} className="form-container">
        <h1>Cadastrar Usuário</h1>

        <div className="form-group">
        <label htmlFor="username">Nome</label>
        <input type="text" name="username" id="username" placeholder="Nome do cliente" onChange={valueInput} /><br />
        </div>

        <div className="form-group">
        <label htmlFor="emailUser">E-mail</label>
        <input type="email" name="emailUser" id="emailUser" placeholder="E-mail do cliente" onChange={valueInput} />
        </div>

        <button type="submit" className="btn-submit">Cadastrar</button>

      </form>
    </main>
  )
};
export default Home;
