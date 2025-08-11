import { Test, TestingModule } from '@nestjs/testing';
import { PombosService } from './pombos.service';

describe('PombosService', () => {
  let service: PombosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PombosService],
    }).compile();

    service = module.get<PombosService>(PombosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
