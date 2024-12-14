import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapsModule } from './maps/maps.module';
import { ConfigModule } from '@nestjs/config';
import { DirectionsController } from './maps/directions/directions.controller';
import { DirectionsService } from './maps/directions/directions.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MapsModule,
  ],
  controllers: [AppController, DirectionsController],
  providers: [AppService, DirectionsService],
})
export class AppModule {}
