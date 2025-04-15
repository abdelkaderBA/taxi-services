import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';

@Controller('ride-coordinates')
export class RideCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'rider coordinates';
  }

  @Post()
  saveRiderCoordinates(
    @Body()
    CreateCoordinatesDto: CreateCoordinatesDto,
  ) {
    return CreateCoordinatesDto;
  }
}
