import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Pombo } from 'src/pombos/entities/pombo.entity';
import { Repository } from 'typeorm';
import { CreateCartaDto } from './dto/create-carta.dto';
import { UpdateCartaStatusDto } from './dto/update-carta-status.dto';
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

  findAll(): Promise<Carta[]> {
    return this.cartasRepository.find({
      relations: ['remetente', 'pombo'],
    });
  }

  async findOne(id: string): Promise<Carta> {
    const carta = await this.cartasRepository.findOne({
      where: { id },
      relations: ['remetente', 'pombo'], // Carrega os dados do remetente e do pombo
    });

    if (!carta) {
      throw new NotFoundException(`Carta com ID "${id}" não encontrada.`);
    }
    return carta;
  }

  async updateStatus(
    id: string,
    updateCartaStatusDto: UpdateCartaStatusDto,
  ): Promise<Carta> {
    const carta = await this.findOne(id);

    // impede a alteração se já foi entregue
    if (carta.status === 'entregue') {
      throw new BadRequestException(
        'Uma carta entregue não pode ter seu status alterado.',
      );
    }

    Object.assign(carta, updateCartaStatusDto);
    return this.cartasRepository.save(carta);
  }

  update(id: number) {
    return `This action updates a #${id} carta`;
  }

  remove(id: number) {
    return `This action removes a #${id} carta`;
  }
}
