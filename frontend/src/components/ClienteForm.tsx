import React, { useState, useEffect } from 'react';
import {
  type Cliente,
  createCliente,
  updateCliente,
  type ClienteCreateData,
  type ClienteUpdateData,
} from '../services/cliente.service';

interface ClienteFormProps {
  onSuccess: (cliente: Cliente) => void;
  clienteToEdit: Cliente | null;
  onCancelEdit: () => void;
}

export function ClienteForm({ onSuccess, clienteToEdit, onCancelEdit }: ClienteFormProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    if (clienteToEdit) {
      setNome(clienteToEdit.nome);
      setEmail(clienteToEdit.email);
      setDataNascimento(clienteToEdit.dataNascimento.split('T')[0]);
      setEndereco(clienteToEdit.endereco);
    }
  }, [clienteToEdit]);
  
  const clearForm = () => {
    setNome('');
    setEmail('');
    setDataNascimento('');
    setEndereco('');
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (clienteToEdit) {
        const clienteData: ClienteUpdateData = { nome, email, dataNascimento, endereco };
        const clienteAtualizado = await updateCliente(clienteToEdit.id, clienteData);
        onSuccess(clienteAtualizado);
      } else {
        const clienteData: ClienteCreateData = { nome, email, dataNascimento, endereco };
        const novoCliente = await createCliente(clienteData);
        onSuccess(novoCliente);
      }
      clearForm();
      onCancelEdit();
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
      alert('Falha ao salvar cliente!');
    }
  };

  const handleCancel = () => {
    clearForm();
    onCancelEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{clienteToEdit ? `Editando: ${clienteToEdit.nome}` : 'Cadastrar Novo Cliente'}</h3>

      <div className="form-group">
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Data de Nascimento:</label>
        <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Endereço:</label>
        <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
      </div>

      <button type="submit">Salvar Alterações</button>
      {clienteToEdit && <button type="button" onClick={handleCancel}>Cancelar Edição</button>}
    </form>
  );
}