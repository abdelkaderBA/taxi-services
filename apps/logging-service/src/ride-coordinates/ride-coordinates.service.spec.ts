import { Test, TestingModule } from '@nestjs/testing';
import { RideCoordinatesService } from './ride-coordinates.service';

describe('RideCoordinatesService', () => {
  let service: RideCoordinatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RideCoordinatesService],
    }).compile();

    service = module.get<RideCoordinatesService>(RideCoordinatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
