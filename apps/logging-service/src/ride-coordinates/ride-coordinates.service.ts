import { Injectable } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { Model } from 'mongoose';
import { RiderCoodinate } from './schemas/ride-coordinates.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RideCoordinatesService {
  constructor(
    @InjectModel(RiderCoodinate.name)
    private readonly riderCoodinateModel: Model<RiderCoodinate>,
  ) {}

  saveRiderCoordinates(CreateCoordinatesDto: CreateCoordinatesDto) {
    return this.riderCoodinateModel.create(CreateCoordinatesDto);
  }

  getRiderCoordinates() {
    return this.riderCoodinateModel.find();
  }
}
