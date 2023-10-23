import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './shared/config/typeorm.config';
import { AuthenticationModule } from './user/authentication/authentication.module';
import { InfluencerModule } from './user/influencer/influencer.module';
import { ConceptModule } from './user/concept/concept.module';
import { AddressModule } from './location/address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.local.env'}),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    AuthenticationModule,
    InfluencerModule,
    ConceptModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
