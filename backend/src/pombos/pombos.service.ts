import { Injectable } from '@nestjs/common';
import { CreatePomboDto } from './dto/create-pombo.dto';
import { UpdatePomboDto } from './dto/update-pombo.dto';

@Injectable()
export class PombosService {
  create(createPomboDto: CreatePomboDto) {
    return 'This action adds a new pombo';
  }

  findAll() {
    return `This action returns all pombos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pombo`;
  }

  update(id: number, updatePomboDto: UpdatePomboDto) {
    return `This action updates a #${id} pombo`;
  }

  remove(id: number) {
    return `This action removes a #${id} pombo`;
  }
}
