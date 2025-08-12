import { Injectable } from '@nestjs/common';
import { CreateCartaDto } from './dto/create-carta.dto';
import { UpdateCartaDto } from './dto/update-carta.dto';

@Injectable()
export class CartasService {
  create(createCartaDto: CreateCartaDto) {
    return 'This action adds a new carta';
  }

  findAll() {
    return `This action returns all cartas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carta`;
  }

  update(id: number, updateCartaDto: UpdateCartaDto) {
    return `This action updates a #${id} carta`;
  }

  remove(id: number) {
    return `This action removes a #${id} carta`;
  }
}
