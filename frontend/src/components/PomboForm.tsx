import React, { useState, useEffect } from 'react';
import {
  type Pombo,
  createPombo,
  updatePombo,
  type PomboCreateData,
  type PomboUpdateData,
} from '../services/pombo.service';

interface PomboFormProps {
  onSuccess: (pombo: Pombo) => void;
  pomboToEdit: Pombo | null;
  onCancelEdit: () => void;
}

export function PomboForm({ onSuccess, pomboToEdit, onCancelEdit }: PomboFormProps) {
  const [apelido, setApelido] = useState('');
  const [fotoUrl, setFotoUrl] = useState('');
  const [velocidade, setVelocidade] = useState(0);

  useEffect(() => {
    if (pomboToEdit) {
      setApelido(pomboToEdit.apelido);
      setFotoUrl(pomboToEdit.fotoUrl);
      setVelocidade(pomboToEdit.velocidadeMedia);
    }
  }, [pomboToEdit]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (pomboToEdit) {
        const pomboData: PomboUpdateData = { apelido, fotoUrl, velocidadeMedia: velocidade };
        const pomboAtualizado = await updatePombo(pomboToEdit.id, pomboData);
        onSuccess(pomboAtualizado);
      } else {
        const pomboData: PomboCreateData = { apelido, fotoUrl, velocidadeMedia: velocidade };
        const novoPombo = await createPombo(pomboData);
        onSuccess(novoPombo);
      }
      // Limpa o formulário
      setApelido('');
      setFotoUrl('');
      setVelocidade(0);
    } catch (error) {
      console.error('Erro ao salvar pombo:', error);
      alert('Falha ao salvar pombo!');
    }
  };

  const handleCancel = () => {
    // Limpa o formulário e avisa a página pai para sair do modo de edição
    setApelido('');
    setFotoUrl('');
    setVelocidade(0);
    onCancelEdit();
  };


  return (
    <form onSubmit={handleSubmit}>
      <h3>{pomboToEdit ? `Editando: ${pomboToEdit.apelido}` : 'Cadastrar Novo Pombo'}</h3>
      
      {/* OS CAMPOS QUE ESTAVAM FALTANDO ESTÃO AQUI */}
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

      <button type="submit">Salvar Alterações</button>
      {pomboToEdit && <button type="button" onClick={handleCancel}>Cancelar Edição</button>}
    </form>
  );
}