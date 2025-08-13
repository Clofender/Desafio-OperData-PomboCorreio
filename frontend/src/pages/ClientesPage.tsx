import { useState, useEffect } from 'react';
import {
  type Cliente,
  getClientes,
  deleteCliente,
} from '../services/cliente.service';
import { ClienteForm } from '../components/ClienteForm';

export function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [clienteToEdit, setClienteToEdit] = useState<Cliente | null>(null);

  useEffect(() => {
    getClientes().then(setClientes).catch(console.error);
  }, []);

  const handleSuccess = (clienteAtualizadoOuNovo: Cliente) => {
    if (clienteToEdit) {
      setClientes(
        clientes.map((c) =>
          c.id === clienteAtualizadoOuNovo.id ? clienteAtualizadoOuNovo : c
        ),
      );
    } else {
      setClientes((clientesAnteriores) => [...clientesAnteriores, clienteAtualizadoOuNovo]);
    }
    setClienteToEdit(null); 
  };

  const handleDelete = async (clienteId: string) => {
    try {
      await deleteCliente(clienteId);
      setClientes(clientes.filter((cliente) => cliente.id !== clienteId));
    } catch (error) {
      console.error('Erro ao remover cliente:', error);
      alert('Falha ao remover cliente!');
    }
  };

  const listItemStyle = {
    marginBottom: '16px',
    padding: '8px',
    border: '1px solid #eee',
    borderRadius: '4px',
  };

  return (
    <div>
      <ClienteForm
        onSuccess={handleSuccess}
        clienteToEdit={clienteToEdit}
        onCancelEdit={() => setClienteToEdit(null)}
      />
      <hr />
      <h2>Nossos Clientes</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {clientes.map((cliente) => (
          <li key={cliente.id} style={listItemStyle}>
            <strong>Nome:</strong> {cliente.nome} <br />
            <strong>Email:</strong> {cliente.email} <br />
            <strong>Nascimento:</strong> {cliente.dataNascimento} <br />
            <strong>Endereço:</strong> {cliente.endereco}
            <div style={{ marginTop: '8px' }}>
              <button onClick={() => setClienteToEdit(cliente)}>Editar</button>
              <button onClick={() => handleDelete(cliente.id)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}