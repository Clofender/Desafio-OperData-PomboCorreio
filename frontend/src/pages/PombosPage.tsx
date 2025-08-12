import { useState, useEffect } from 'react';
import { type Pombo, getPombos } from '../services/pombo.service';

export function PombosPage() {
  const [pombos, setPombos] = useState<Pombo[]>([]);

  useEffect(() => {
    getPombos()
      .then((data) => {
        setPombos(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar pombos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Nossos Pombos-Correio</h2>
      <ul>
        {pombos.map((pombo) => (
          <li key={pombo.id}>
            {pombo.apelido} - Velocidade: {pombo.velocidadeMedia} km/h
          </li>
        ))}
      </ul>
    </div>
  );
}