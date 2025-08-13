import axios from 'axios';

export interface Pombo {
  id: string;
  apelido: string;
  fotoUrl: string;
  velocidadeMedia: number;
  estaAtivo: boolean;
}

export type PomboCreateData = Omit<Pombo, 'id' | 'estaAtivo'>;
export type PomboUpdateData = Partial<PomboCreateData>;

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getPombos = async (): Promise<Pombo[]> => {
  const response = await apiClient.get('/pombos');
  return response.data;
};

export const createPombo = async (pomboData: PomboCreateData): Promise<Pombo> => {
  const response = await apiClient.post('/pombos', pomboData);
  return response.data;
};

export const deletePombo = async (id: string): Promise<void> => {
  await apiClient.delete(`/pombos/${id}`);
};

export const retirePombo = async (id: string): Promise<Pombo> => {
  const response = await apiClient.patch(`/pombos/${id}/retire`);
  return response.data;
};

export const updatePombo = async (
  id: string,
  pomboData: PomboUpdateData,
): Promise<Pombo> => {
  const response = await apiClient.patch(`/pombos/${id}`, pomboData);
  return response.data;
};