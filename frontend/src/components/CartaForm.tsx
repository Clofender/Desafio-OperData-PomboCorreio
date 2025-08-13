import React, { useState, useEffect } from 'react';
import { type Carta, createCarta } from '../services/carta.service';
import { type Cliente, getClientes } from '../services/cliente.service';
import { type Pombo, getPombos } from '../services/pombo.service';

interface CartaFormProps {
  onCartaCriada: (novaCarta: Carta) => void;
}

type FormData = {
  conteudo: string;
  enderecoDestinatario: string;
  nomeDestinatario: string;
  remetenteId: string;
  pomboId: string;
};

export function CartaForm({ onCartaCriada }: CartaFormProps) {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [pombos, setPombos] = useState<Pombo[]>([]);
  const [formData, setFormData] = useState<FormData>({
    conteudo: '',
    enderecoDestinatario: '',
    nomeDestinatario: '',
    remetenteId: '',
    pomboId: '',
  });

  useEffect(() => {
    getClientes().then(setClientes).catch(console.error);
    getPombos()
      .then(pombosDaApi => {
        const pombosAtivos = pombosDaApi.filter(p => p.estaAtivo);
        setPombos(pombosAtivos);
      })
      .catch(console.error);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const novaCarta = await createCarta(formData);
      onCartaCriada(novaCarta);
      setFormData(prev => ({ ...prev, conteudo: '', enderecoDestinatario: '', nomeDestinatario: '' }));
    } catch (error) {
      console.error('Erro ao criar carta:', error);
      alert('Falha ao criar carta! Verifique os dados.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enviar Nova Carta</h3>
      
      <div className="form-group">
        <label>Remetente (Cliente):</label>
        <select name="remetenteId" value={formData.remetenteId} onChange={handleChange} required>
          <option value="">Selecione um cliente</option>
          {clientes.map(cliente => (
            <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Pombo-Correio:</label>
        <select name="pomboId" value={formData.pomboId} onChange={handleChange} required>
          <option value="">Selecione um pombo</option>
          {pombos.map(pombo => (
            <option key={pombo.id} value={pombo.id}>{pombo.apelido}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Nome do Destinatário:</label>
        <input type="text" name="nomeDestinatario" value={formData.nomeDestinatario} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Endereço do Destinatário:</label>
        <input type="text" name="enderecoDestinatario" value={formData.enderecoDestinatario} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Mensagem:</label>
        <textarea name="conteudo" value={formData.conteudo} onChange={handleChange} required />
      </div>

      <button type="submit">Enviar Carta</button>
    </form>
  );
}