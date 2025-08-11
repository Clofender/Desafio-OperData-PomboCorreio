import { Test, TestingModule } from '@nestjs/testing';
import { PombosController } from './pombos.controller';
import { PombosService } from './pombos.service';

describe('PombosController', () => {
  let controller: PombosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PombosController],
      providers: [PombosService],
    }).compile();

    controller = module.get<PombosController>(PombosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
