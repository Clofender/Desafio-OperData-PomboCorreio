import { useState, useEffect } from 'react';
import { type Pombo, getPombos } from '../services/pombo.service';
import { PomboForm } from '../components/PomboForm';

export function PombosPage() {
  const [pombos, setPombos] = useState<Pombo[]>([]);

  useEffect(() => {
    getPombos()
      .then(setPombos)
      .catch((error) => {
        console.error('Erro ao buscar pombos:', error);
      });
  }, []);

  const handlePomboCreated = (novoPombo: Pombo) => {
    setPombos((pombosAnteriores) => [...pombosAnteriores, novoPombo]);
  };

  return (
    <div>
      <PomboForm onPomboCreated={handlePomboCreated} />
      <hr />
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