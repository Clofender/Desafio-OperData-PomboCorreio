import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePomboDto } from './dto/create-pombo.dto';
import { Pombo } from './entities/pombo.entity';

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

  findOne(id: number) {
    return `This action returns a #${id} pombo`;
  }

  update(id: number) {
    return `This action updates a #${id} pombo`;
  }

  remove(id: number) {
    return `This action removes a #${id} pombo`;
  }
}
