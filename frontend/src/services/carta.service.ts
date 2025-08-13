import axios from 'axios';
import { type Cliente } from './cliente.service';
import { type Pombo } from './pombo.service';

export interface Carta {
  id: string;
  conteudo: string;
  enderecoDestinatario: string;
  nomeDestinatario: string;
  status: string;
  remetente: Cliente;
  pombo: Pombo;
}

export type CartaCreateData = {
  conteudo: string;
  enderecoDestinatario: string;
  nomeDestinatario: string;
  remetenteId: string;
  pomboId: string;
};

export type UpdateCartaStatusData = {
  status: string;
};

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getCartas = async (): Promise<Carta[]> => {
  const response = await apiClient.get('/cartas');
  return response.data;
};

export const createCarta = async (cartaData: CartaCreateData): Promise<Carta> => {
  const response = await apiClient.post('/cartas', cartaData);
  return response.data;
};

export const updateCartaStatus = async (
  id: string,
  data: UpdateCartaStatusData,
): Promise<Carta> => {
  const response = await apiClient.patch(`/cartas/${id}/status`, data);
  return response.data;
};