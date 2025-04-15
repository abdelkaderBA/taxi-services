import { Test, TestingModule } from '@nestjs/testing';
import { RideCoordinatesController } from './ride-coordinates.controller';

describe('RideCoordinatesController', () => {
  let controller: RideCoordinatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RideCoordinatesController],
    }).compile();

    controller = module.get<RideCoordinatesController>(RideCoordinatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
