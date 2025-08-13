import axios from 'axios';

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  dataNascimento: string;
  endereco: string;
}

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getClientes = async (): Promise<Cliente[]> => {
  const response = await apiClient.get('/clientes');
  return response.data;
};