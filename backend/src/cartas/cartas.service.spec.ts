import { Test, TestingModule } from '@nestjs/testing';
import { CartasService } from './cartas.service';

describe('CartasService', () => {
  let service: CartasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartasService],
    }).compile();

    service = module.get<CartasService>(CartasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
