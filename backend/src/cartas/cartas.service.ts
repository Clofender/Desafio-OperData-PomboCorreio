import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Pombo } from 'src/pombos/entities/pombo.entity';
import { Repository } from 'typeorm';
import { CreateCartaDto } from './dto/create-carta.dto';
import { Carta } from './entities/carta.entity';

@Injectable()
export class CartasService {
  constructor(
    @InjectRepository(Carta)
    private readonly cartasRepository: Repository<Carta>,
    @InjectRepository(Pombo)
    private readonly pombosRepository: Repository<Pombo>,
    @InjectRepository(Cliente)
    private readonly clientesRepository: Repository<Cliente>,
  ) {}

  async create(createCartaDto: CreateCartaDto): Promise<Carta> {
    const { remetenteId, pomboId, ...dadosDaCarta } = createCartaDto;

    // busca o cliente e o pombo no bd pelo ID
    const remetente = await this.clientesRepository.findOneBy({
      id: remetenteId,
    });
    const pombo = await this.pombosRepository.findOneBy({ id: pomboId });

    if (!remetente) {
      throw new BadRequestException(
        `Remetente com ID "${remetenteId}" não encontrado.`,
      );
    }
    if (!pombo) {
      throw new BadRequestException(
        `Pombo com ID "${pomboId}" não encontrado.`,
      );
    }

    if (!pombo.estaAtivo) {
      throw new BadRequestException(
        `O pombo "${pombo.apelido}" está aposentado e não pode ser escolhido para envios.`,
      );
    }

    // cria a nova carta
    const novaCarta = this.cartasRepository.create({
      ...dadosDaCarta,
      remetente,
      pombo,
      status: 'na fila',
    });

    return this.cartasRepository.save(novaCarta);
  }

  findAll() {
    return `This action returns all cartas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carta`;
  }

  update(id: number) {
    return `This action updates a #${id} carta`;
  }

  remove(id: number) {
    return `This action removes a #${id} carta`;
  }
}
