import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { AuthenticationModule } from './authentication/authentication.module';
import { InfluencerModule } from './influencer/influencer.module';
import { ConceptModule } from './concept/concept.module';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.local.env'}),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    AuthenticationModule,
    InfluencerModule,
    ConceptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
