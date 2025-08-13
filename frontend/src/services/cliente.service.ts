import axios from 'axios';

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  dataNascimento: string;
  endereco: string;
}

export type ClienteCreateData = Omit<Cliente, 'id'>;
export type ClienteUpdateData = Partial<ClienteCreateData>;

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getClientes = async (): Promise<Cliente[]> => {
  const response = await apiClient.get('/clientes');
  return response.data;
};

export const createCliente = async (clienteData: ClienteCreateData): Promise<Cliente> => {
  const response = await apiClient.post('/clientes', clienteData);
  return response.data;
};

export const updateCliente = async (
  id: string,
  clienteData: ClienteUpdateData,
): Promise<Cliente> => {
  const response = await apiClient.patch(`/clientes/${id}`, clienteData);
  return response.data;
};

export const deleteCliente = async (id: string): Promise<void> => {
  await apiClient.delete(`/clientes/${id}`);
};