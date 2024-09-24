import {Logger, Module} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import {TypeOrmModule} from "@nestjs/typeorm";

const rootPath = join(__dirname, '..', 'frontend', 'browser')
Logger.log('ServeStaticModule rootPath', rootPath)
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath ,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
