import { Module } from '@nestjs/common';
import { CartasService } from './cartas.service';
import { CartasController } from './cartas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carta } from './entities/carta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carta])],
  controllers: [CartasController],
  providers: [CartasService],
})
export class CartasModule {}
