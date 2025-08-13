import { useState } from 'react';
import { type Carta, updateCartaStatus } from '../services/carta.service';

interface StatusUpdaterProps {
  carta: Carta;
  onStatusUpdated: (cartaAtualizada: Carta) => void;
}

export function StatusUpdater({ carta, onStatusUpdated }: StatusUpdaterProps) {
  const [selectedStatus, setSelectedStatus] = useState(carta.status);
  const isDelivered = carta.status === 'entregue';

  const handleUpdate = async () => {
    try {
      const cartaAtualizada = await updateCartaStatus(carta.id, { status: selectedStatus });
      onStatusUpdated(cartaAtualizada);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      alert('Não foi possível atualizar o status. A carta já foi entregue?');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
      <select 
        value={selectedStatus} 
        onChange={(e) => setSelectedStatus(e.target.value)}
        disabled={isDelivered}
      >
        <option value="na fila">Na Fila</option>
        <option value="enviado">Enviado</option>
        <option value="entregue">Entregue</option>
      </select>
      <button 
        onClick={handleUpdate} 
        disabled={isDelivered || selectedStatus === carta.status}
      >
        Atualizar
      </button>
    </div>
  );
}