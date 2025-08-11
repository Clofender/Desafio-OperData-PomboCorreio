import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePomboDto } from './dto/create-pombo.dto';
import { Pombo } from './entities/pombo.entity';
import { UpdatePomboDto } from './dto/update-pombo.dto';

@Injectable()
export class PombosService {
  constructor(
    @InjectRepository(Pombo)
    private readonly pombosRepository: Repository<Pombo>,
  ) {}

  // DTO para criar e salvar um novo pombo no BD
  create(createPomboDto: CreatePomboDto): Promise<Pombo> {
    const pombo = this.pombosRepository.create(createPomboDto);
    return this.pombosRepository.save(pombo);
  }

  findAll(): Promise<Pombo[]> {
    return this.pombosRepository.find();
  }

  // buscar por id
  async findOne(id: string): Promise<Pombo> {
    const pombo = await this.pombosRepository.findOneBy({ id: id });

    if (!pombo) {
      throw new NotFoundException(`Pombo com ID "${id}" não encontrado.`);
    }

    return pombo;
  }

  async update(id: string, updatePomboDto: UpdatePomboDto): Promise<Pombo> {
    const pombo = await this.pombosRepository.preload({
      id: id,
      ...updatePomboDto,
    });

    if (!pombo) {
      throw new NotFoundException(`Pombo com ID "${id}" não encontrado.`);
    }

    return this.pombosRepository.save(pombo);
  }

  remove(id: number) {
    return `This action removes a #${id} pombo`;
  }
}
