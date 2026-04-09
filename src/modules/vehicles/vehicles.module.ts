import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './services/services/vehicles.service';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService]
})
export class VehiclesModule {}
