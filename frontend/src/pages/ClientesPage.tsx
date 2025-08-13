import { useState, useEffect } from 'react';
import { type Cliente, getClientes } from '../services/cliente.service';

export function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    getClientes()
      .then(setClientes)
      .catch((error) => {
        console.error('Erro ao buscar clientes:', error);
      });
  }, []);

  const listItemStyle = {
    marginBottom: '16px',
    padding: '8px',
    border: '1px solid #eee',
    borderRadius: '4px',
  };

  return (
    <div>
      <h2>Nossos Clientes</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {clientes.map((cliente) => (
          <li key={cliente.id} style={listItemStyle}>
            <strong>Nome:</strong> {cliente.nome} <br />
            <strong>Email:</strong> {cliente.email} <br />
            <strong>Nascimento:</strong> {cliente.dataNascimento} <br />
            <strong>Endereço:</strong> {cliente.endereco}
          </li>
        ))}
      </ul>
    </div>
  );
}