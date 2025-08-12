import { Test, TestingModule } from '@nestjs/testing';
import { CartasController } from './cartas.controller';
import { CartasService } from './cartas.service';

describe('CartasController', () => {
  let controller: CartasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartasController],
      providers: [CartasService],
    }).compile();

    controller = module.get<CartasController>(CartasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
