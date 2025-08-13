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

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getCartas = async (): Promise<Carta[]> => {
  const response = await apiClient.get('/cartas');
  return response.data;
};