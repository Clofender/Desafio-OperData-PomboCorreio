import { Module } from '@nestjs/common';
import { PombosService } from './pombos.service';
import { PombosController } from './pombos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pombo } from './entities/pombo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pombo])],
  controllers: [PombosController],
  providers: [PombosService],
})
export class PombosModule {}
