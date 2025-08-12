import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Pombo } from 'src/pombos/entities/pombo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Carta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  conteudo: string;

  @Column()
  enderecoDestinatario: string;

  @Column()
  nomeDestinatario: string;

  @Column()
  status: string;

  // relacionamentos

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'remetenteId' })
  remetente: Cliente;

  @ManyToOne(() => Pombo)
  @JoinColumn({ name: 'pomboId' })
  pombo: Pombo;
}
