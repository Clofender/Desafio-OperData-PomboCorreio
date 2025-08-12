import axios from 'axios';

export interface Pombo {
  id: string;
  apelido: string;
  fotoUrl: string;
  velocidadeMedia: number;
  estaAtivo: boolean;
}

export type PomboCreateData = Omit<Pombo, 'id' | 'estaAtivo'>;

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

// buscar a lista de pombos na API
export const getPombos = async (): Promise<Pombo[]> => {
  const response = await apiClient.get('/pombos');
  return response.data;
};

export const createPombo = async (pomboData: PomboCreateData): Promise<Pombo> => {
  const response = await apiClient.post('/pombos', pomboData);
  return response.data;
};
