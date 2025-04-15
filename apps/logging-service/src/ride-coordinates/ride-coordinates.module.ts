import { Module } from '@nestjs/common';
import { RideCoordinatesController } from './ride-coordinates.controller';
import { RideCoordinatesService } from './ride-coordinates.service';

@Module({
  controllers: [RideCoordinatesController],
  providers: [RideCoordinatesService],
})
export class RideCoordinatesModule {}
