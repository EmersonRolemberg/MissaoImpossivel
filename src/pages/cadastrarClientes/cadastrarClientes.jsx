import React, { useState } from "react";
import { insertClientes } from "../../api/clientesApi";

const CadastrarClientes = () => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [celular, setCelular] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cliente = { id: id, nome: nome, email: email, senha: senha, celular: celular };
    console.log (cliente)
    
    await insertClientes(cliente);
    alert("Cliente cadastrado com sucesso!");
    setId("");
    setNome("");
    setEmail("");
    setSenha("");
    setCelular("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Id do Cliente"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nome do Cliente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email do Cliente"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha do Cliente"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          type="text"
          placeholder="Celular do Cliente"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarClientes;
