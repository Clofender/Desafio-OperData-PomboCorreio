import { Module } from '@nestjs/common';
import { PombosService } from './pombos.service';
import { PombosController } from './pombos.controller';

@Module({
  controllers: [PombosController],
  providers: [PombosService],
})
export class PombosModule {}
