import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RiderCoodinateDocument = HydratedDocument<RiderCoodinate>;

@Schema()
export class RiderCoodinate {
  @Prop({ required: true })
  latitude: string;

  @Prop({ required: true })
  longitude: string;

  @Prop({ required: true })
  rider: string;
}

export const RiderCoodinateSchema =
  SchemaFactory.createForClass(RiderCoodinate);
