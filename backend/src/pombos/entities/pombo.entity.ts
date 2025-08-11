import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pombo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  apelido: string; // req de exemplo

  @Column()
  fotoUrl: string; // req de foto de perfil

  @Column({ type: 'float' })
  velocidadeMedia: number; // req de velocidade média

  @Column({ default: true })
  estaAtivo: boolean; // aposentar
}