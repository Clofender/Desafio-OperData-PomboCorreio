import axios from 'axios';

export interface Pombo {
  id: string;
  apelido: string;
  fotoUrl: string;
  velocidadeMedia: number;
  estaAtivo: boolean;
}

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

// buscar a lista de pombos na API
export const getPombos = async (): Promise<Pombo[]> => {
  const response = await apiClient.get('/pombos');
  return response.data;
};