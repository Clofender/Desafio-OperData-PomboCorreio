import { useState, useEffect } from 'react';
import { type Pombo, getPombos, deletePombo, retirePombo } from '../services/pombo.service';
import { PomboForm } from '../components/PomboForm';

export function PombosPage() {
  const [pombos, setPombos] = useState<Pombo[]>([]);

  useEffect(() => {
    getPombos().then(setPombos).catch(console.error);
  }, []);

  const handlePomboCreated = (novoPombo: Pombo) => {
    setPombos((pombosAnteriores) => [...pombosAnteriores, novoPombo]);
  };

  const handleDelete = async (pomboId: string) => {
    try {
      await deletePombo(pomboId);
      setPombos(pombos.filter((pombo) => pombo.id !== pomboId));
    } catch (error) {
      console.error('Erro ao remover pombo:', error);
      alert('Falha ao remover pombo!');
    }
  };

  const handleRetire = async (pomboId: string) => {
    try {
      const pomboAtualizado = await retirePombo(pomboId);
      setPombos(
        pombos.map((pombo) =>
          pombo.id === pomboId ? pomboAtualizado : pombo
        )
      );
    } catch (error) {
      console.error('Erro ao aposentar pombo:', error);
      alert('Falha ao aposentar pombo!');
    }
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
            {!pombo.estaAtivo && <strong> (Aposentado)</strong>}

            <button onClick={() => handleRetire(pombo.id)} disabled={!pombo.estaAtivo}>
              Aposentar
            </button>
            
            <button onClick={() => handleDelete(pombo.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}