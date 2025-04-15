import { Module } from '@nestjs/common';
import { RideCoordinatesController } from './ride-coordinates.controller';
import { RideCoordinatesService } from './ride-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RiderCoodinate,
  RiderCoodinateSchema,
} from './schemas/ride-coordinates.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RiderCoodinate.name, schema: RiderCoodinateSchema },
    ]),
  ],
  controllers: [RideCoordinatesController],
  providers: [RideCoordinatesService],
})
export class RideCoordinatesModule {}
