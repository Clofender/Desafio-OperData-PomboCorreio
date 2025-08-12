import { Module } from '@nestjs/common';
import { CartasService } from './cartas.service';
import { CartasController } from './cartas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carta } from './entities/carta.entity';
import { Pombo } from 'src/pombos/entities/pombo.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carta, Pombo, Cliente])],
  controllers: [CartasController],
  providers: [CartasService],
})
export class CartasModule {}
