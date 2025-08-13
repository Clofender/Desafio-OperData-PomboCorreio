import { useState, useEffect } from 'react';
import {
  type Pombo,
  getPombos,
  deletePombo,
  retirePombo,
} from '../services/pombo.service';
import { PomboForm } from '../components/PomboForm';

export function PombosPage() {
  const [pombos, setPombos] = useState<Pombo[]>([]);
  const [pomboToEdit, setPomboToEdit] = useState<Pombo | null>(null);

  useEffect(() => {
    getPombos().then(setPombos).catch(console.error);
  }, []);

  const handleSuccess = (pomboAtualizadoOuNovo: Pombo) => {
    if (pomboToEdit) {
      setPombos(
        pombos.map((p) =>
          p.id === pomboAtualizadoOuNovo.id ? pomboAtualizadoOuNovo : p,
        ),
      );
    } else {
      setPombos((pombosAnteriores) => [...pombosAnteriores, pomboAtualizadoOuNovo]);
    }
    setPomboToEdit(null);
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
          pombo.id === pomboId ? pomboAtualizado : pombo,
        ),
      );
    } catch (error) {
      console.error('Erro ao aposentar pombo:', error);
      alert('Falha ao aposentar pombo!');
    }
  };

  return (
    <div>
      <PomboForm
        onSuccess={handleSuccess}
        pomboToEdit={pomboToEdit}
        onCancelEdit={() => setPomboToEdit(null)}
      />
      <hr />
      <h2>Nossos Pombos-Correio</h2>

      <ul className="item-list">
        {pombos.map((pombo) => (
          <li key={pombo.id} className="list-item">
            <div className="list-item-info">
              {pombo.apelido} - Velocidade: {pombo.velocidadeMedia} km/h
              {!pombo.estaAtivo && <strong> (Aposentado)</strong>}
            </div>

            <div className="list-item-actions">
              <button onClick={() => setPomboToEdit(pombo)}>Editar</button>

              <button
                onClick={() => handleRetire(pombo.id)}
                disabled={!pombo.estaAtivo}
              >
                Aposentar
              </button>

              <button onClick={() => handleDelete(pombo.id)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}