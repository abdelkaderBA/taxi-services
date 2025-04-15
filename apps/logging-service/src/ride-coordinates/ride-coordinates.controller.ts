import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RideCoordinatesService } from './ride-coordinates.service';

@Controller('ride-coordinates')
export class RideCoordinatesController {
  constructor(private rideCoordinatesService: RideCoordinatesService) {}

  @Get()
  getRiderCoordinates() {
    return 'rider coordinates';
  }

  @Post()
  saveRiderCoordinates(
    @Body()
    CreateCoordinatesDto: CreateCoordinatesDto,
  ) {
    return this.rideCoordinatesService.saveRiderCoordinates(
      CreateCoordinatesDto,
    );
  }
}
