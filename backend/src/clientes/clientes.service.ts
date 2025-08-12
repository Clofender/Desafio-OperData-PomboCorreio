import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clientesRepository: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = this.clientesRepository.create(createClienteDto);
    return this.clientesRepository.save(cliente);
  }

  findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find();
  }

  async findOne(id: string): Promise<Cliente> {
    const cliente = await this.clientesRepository.findOneBy({ id: id });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID "${id}" não encontrado.`);
    }

    return cliente;
  }

  async update(
    id: string,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const cliente = await this.clientesRepository.preload({
      id: id,
      ...updateClienteDto,
    });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID "${id}" não encontrado.`);
    }

    return this.clientesRepository.save(cliente);
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
