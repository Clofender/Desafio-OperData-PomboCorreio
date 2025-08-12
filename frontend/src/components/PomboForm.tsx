import { useState } from 'react';
import { type Pombo, createPombo, type PomboCreateData } from '../services/pombo.service';

interface PomboFormProps {
  onPomboCreated: (novoPombo: Pombo) => void;
}

export function PomboForm({ onPomboCreated }: PomboFormProps) {
  const [apelido, setApelido] = useState('');
  const [fotoUrl, setFotoUrl] = useState('');
  const [velocidade, setVelocidade] = useState(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const pomboData: PomboCreateData = {
      apelido,
      fotoUrl,
      velocidadeMedia: velocidade,
    };

    try {
      const novoPombo = await createPombo(pomboData);
      onPomboCreated(novoPombo);
      setApelido('');
      setFotoUrl('');
      setVelocidade(0);
    } catch (error) {
      console.error('Erro ao criar pombo:', error);
      alert('Falha ao criar pombo!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Cadastrar Novo Pombo</h3>
      <div>
        <label>Apelido: </label>
        <input type="text" value={apelido} onChange={(e) => setApelido(e.target.value)} required />
      </div>
      <div>
        <label>URL da Foto: </label>
        <input type="text" value={fotoUrl} onChange={(e) => setFotoUrl(e.target.value)} required />
      </div>
      <div>
        <label>Velocidade Média (km/h): </label>
        <input type="number" value={velocidade} onChange={(e) => setVelocidade(parseFloat(e.target.value))} required />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}